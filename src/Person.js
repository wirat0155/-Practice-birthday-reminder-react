import React from "react";
import "./Person.css";

const Person = ({ img, name, age }) => {
  return (
    <div className="person">
      <div className="imgDiv">
        <center>
          <img className="profileImg" src={img} alt="" height="70px" />
        </center>
      </div>
      <div className="infoDiv">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;
