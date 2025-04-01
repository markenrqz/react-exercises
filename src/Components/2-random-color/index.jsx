import React, { useState, useEffect } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  function generateRandomHexColor() {
    const hexValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[randomColorUtility(hexValues.length)];
    }
    setColor(hexColor);
  }

  const generateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") generateRandomRgbColor();
    else generateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="random-color-container"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Hex Format</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB format</button>
      <button
        onClick={
          typeOfColor === "rbg"
            ? generateRandomRgbColor
            : generateRandomHexColor
        }
      >
        Generate Random Color
      </button>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        gap: "20px"
      }}>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
