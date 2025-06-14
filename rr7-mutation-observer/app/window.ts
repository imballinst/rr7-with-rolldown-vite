import type React from "react";
import ReactDOM from "react-dom/client";
import type { Button } from "./components/ui/button";

declare global {
  interface Window {
    mutationHandler: {
      isRegistered: boolean;
      register(param: {
        React: typeof React;
        ReactDOM: typeof ReactDOM;
        components: {
          Button: typeof Button;
        };
      }): void;
      pathInfo: {
        baseDynamicPath: string;
      };
    };
  }
}

if (typeof window !== "undefined") {
  window.mutationHandler = {
    isRegistered: false,
    pathInfo: { baseDynamicPath: "" },
    register(context) {
      if (window.mutationHandler.isRegistered) return;
      window.mutationHandler.isRegistered = true;

      const LIST_PATHS = [
        {
          path: "/",
          cb: () => {
            const el = document.getElementById("toggler");
            if (!el) return;

            const existingPrependedElement =
              document.getElementById("prepended-button");
            if (existingPrependedElement) return;

            const prependedElement = context.React.createElement(
              context.components.Button,
              {
                children: "Prepended button",
                id: "prepended-button",
                onClick: () => {
                  alert(
                    `Context info: ${JSON.stringify(
                      window.mutationHandler.pathInfo
                    )}`
                  );
                },
              }
            );
            let prependedElementContainer = document.getElementById(
              "prepended-button-container"
            );
            if (prependedElementContainer) return;

            prependedElementContainer = document.createElement("div");
            prependedElementContainer.id = "prepended-button-container";

            el.prepend(prependedElementContainer);

            const root = ReactDOM.createRoot(prependedElementContainer);
            root.render(prependedElement);
          },
        },
      ];

      let timeout: any;

      function mutationHandler(mutationList?: MutationRecord[]) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          const matchingPath = LIST_PATHS.find(
            (p) => p.path === window.location.pathname
          );
          if (!matchingPath) return;
          console.info("ye", mutationList);
          matchingPath.cb();
        }, 500);
      }

      // Create an observer instance linked to the callback function
      mutationHandler();
      const observer = new MutationObserver(mutationHandler);

      // Start observing the target node for configured mutations
      const config = { childList: true, subtree: true };
      observer.observe(document.body, config);
    },
  };
}

export {};
