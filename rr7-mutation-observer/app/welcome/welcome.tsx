import { useEffect, useState, createElement } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { usePostHog } from "posthog-js/react";

interface Creds {
  id: string;
  username: string;
  password: string;
}

export function Welcome() {
  const [creds, setCreds] = useState<Creds[]>([]);
  const posthog = usePostHog();

  useEffect(() => {
    const id = posthog.get_distinct_id();
    posthog.identify(id, {
      email: `${id}@helloworld.com`,
      name: id,
    });
    posthog.capture("$pageview");

    console.info(posthog.getFeatureFlag("test-experiment"));
  }, [posthog]);

  return (
    <main className="flex items-center justify-center mt-16 p-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="w-full space-y-6 px-4">
          <section>
            <div className="flex justify-between text-2xl border-b border-gray-700 pb-2 mb-2">
              <h2>Creds</h2>

              {creds.length % 2 === 0 && (
                <div id="toggler" data-creds-count={creds.length}>
                  <Button>Toggle element injection panel</Button>
                </div>
              )}
            </div>

            <ul className="list-disc space-y-2">
              {creds.map((c, idx) => (
                <li key={c.id}>
                  <div className="flex gap-x-2">
                    <div className="flex items-center w-full">{c.username}</div>
                    <div className="flex items-center w-full">{c.password}</div>

                    <Button
                      variant="outline"
                      className="min-w-[105px]"
                      onClick={() => {
                        setCreds((prev) => {
                          const newCreds = [...prev];
                          newCreds.splice(idx, 1);
                          return newCreds;
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <form
              className="flex gap-x-2 mt-2"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);

                setCreds((prev) =>
                  prev.concat([
                    {
                      id: crypto.randomUUID(),
                      username: (formData.get("username") as string) ?? "",
                      password: (formData.get("password") as string) ?? "",
                    },
                  ])
                );
              }}
            >
              <Input type="text" name="username" placeholder="username" />
              <Input type="password" name="password" placeholder="password" />

              <Button variant="outline" className="min-w-[105px]" type="submit">
                Add creds
              </Button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
