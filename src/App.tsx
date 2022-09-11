import React from "react";
import { Grid } from "./lib/Grid";
import { CommandCenter } from "./lib/CommandCenter";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="tui-nav relative mb-3">
        <span>Global Defense v0.1</span>
      </nav>

      <main className="ml-2 mr-4 space-y-5 ">
        <section className="tui-window w-full">
          <fieldset className="tui-fieldset tui-border-solid">
            <legend>Defense Grid</legend>
            <Grid />
          </fieldset>
        </section>

        <section>
          <CommandCenter />
        </section>
      </main>
    </div>
  );
}

export default App;
