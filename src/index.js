import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//remember to add the folder of which it is located first (components)
//This is the only file we do that in, since the rest are located in the same folder.
import App from "./components/App";
/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */
ReactDOM.render(<App />, document.getElementById("root"));
//Er kommet til "Events" (video nr. 13)
