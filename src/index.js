import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StudentDataProvider from "./provider/StudentDataProvider";

ReactDOM.render(
  <StudentDataProvider>
    <App />
  </StudentDataProvider>,
  document.getElementById("root")
);
