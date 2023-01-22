import React from "react";
import Navbar from "./Navbar";
import BotsData from "./BotsData";

function App() {
  return (
    <>
     <Navbar />
     <div className="heading">
      <h4>Bots Collection</h4>
      <h4>My Bots Army</h4>
     </div>
     <BotsData />
    </>
  );
}

export default App;
