import "tuicss/dist/tuicss.js";
import "tuicss/dist/tuicss.css";

import React from "react";
import { Grid } from "./lib/Grid";
import { InfoPanel } from "./lib/InfoPanel";

function App() {
  return (
    <div className="bg-emerald-200 m-2 space-y-2">
      <header className="bg-emerald-300">
        <h1>Global Defense</h1>
      </header>
      <main className="bg-emerald-400">
        <Grid columns="four" />
        <InfoPanel />
      </main>
    </div>
  );
}

export default App;
