import React, { Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading....</div>}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
