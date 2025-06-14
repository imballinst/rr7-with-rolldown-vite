import { useState, HTMLProps } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

interface Creds {
  id: string;
  username: string;
  password: string;
}

export function Welcome() {
  const [count, setCount] = useState(0);
  const [creds, setCreds] = useState<Creds[]>([]);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="w-full space-y-6 px-4">
          <div>
            <span hidden={count % 2 === 0}>{count}</span>

            <button
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
            >
              Increment
            </button>
          </div>

          <section>
            <h2>Creds</h2>

            <ul>
              {creds.map((c, idx) => (
                <li key={c.id}>
                  <div className="flex gap-x-2">
                    <div>
                      {c.username} - {c.password}
                    </div>

                    <button
                      onClick={() => {
                        setCreds((prev) => {
                          const newCreds = [...prev];
                          newCreds.splice(idx, 1);
                          return newCreds;
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <form
              className="flex gap-x-2"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                console.info(
                  {
                    id: crypto.randomUUID(),
                    username: formData.get("username"),
                    password: formData.get("password"),
                  },
                  Object.fromEntries(formData)
                );

                setCreds((prev) =>
                  prev.concat({
                    id: crypto.randomUUID(),
                    username: formData.get("username"),
                    password: formData.get("password"),
                  })
                );
              }}
            >
              <input type="text" name="username" placeholder="username" />
              <input type="password" name="password" placeholder="password" />

              <button className="min-w-24" type="submit">
                Add creds
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

function Button({ className, ...props }: HTMLProps<HTMLButtonElement>) {
  return <button {...props} className={`${className} border border-gray-200`} />
}