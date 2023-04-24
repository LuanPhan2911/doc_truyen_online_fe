import { useEffect, useState } from "react";
import Root from "../routes/Root";
import "./App.scss";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
