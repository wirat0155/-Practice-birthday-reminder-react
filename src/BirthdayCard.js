import React, { useState } from "react";
import peopleData from "./data";
import Person from "./Person";
import "./BirthdayCard.css";

const BirthdayCard = () => {
  let [people, setPeople] = useState(peopleData);
  let [num, setNum] = useState(peopleData.length);

  const clearAll = () => {
    setPeople([]);
    setNum("No");
  };
  return (
    <section className="birthdayCard">
      <h2>{num} Birthdays Today</h2>
      {people.map((person) => {
        return <Person {...person} />;
      })}

      <center>
        <button type="button" className="btn" onClick={() => clearAll()}>
          Clear All
        </button>
      </center>
    </section>
  );
};

export default BirthdayCard;
