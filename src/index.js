import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import BirthdayCard from "./BirthdayCard";

const App = () => {
  return (
    <>
      <BirthdayCard />
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
