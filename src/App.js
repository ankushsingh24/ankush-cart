import React from "react";
import { useGlobalContext } from "./Context/Context";

import Navbar from "./Navbar/Navbar";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading Ankush's Cart</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
