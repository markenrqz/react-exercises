import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingleSelect = (currentId) => {
    setSelected(selected === currentId ? null : currentId);
  };

  const handleMultiSelect = (currentId) => {
    setMultiSelect(multiSelect.indexOf(currentId) === -1 ?
        [...multiSelect ,currentId] : multiSelect.filter((id) => id !== currentId));
  }

  

  console.log(isMultiSelect);
  console.log(multiSelect)

  return (
    <div className="wrapper">
      <button onClick={() => setIsMultiSelect(!isMultiSelect)}> Toggle Multi Select</button>
      <div className="accordion">
        {data &&
          data.length > 0 &&
          data.map((dataItems) => (
            <div className="item">
              <div
                className="title"
                onClick={ isMultiSelect ? () => handleMultiSelect(dataItems.id) :
                    () => handleSingleSelect(dataItems.id)}
              >
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {/* {selected === dataItems.id && (
                <div className="content">{dataItems.answer}</div>
              )} */}

              {
                isMultiSelect ? multiSelect.indexOf(dataItems.id) !== -1 && (
                  <div className="content">{dataItems.answer}</div>
                ) : selected === dataItems.id && (
                  <div className="content">{dataItems.answer}</div>
                )
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordion;
