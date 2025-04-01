import React, { useState } from "react";
import QRCode from "react-qr-code"
import "./styles.css"

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function generateQrCode() {
    setQrCode(input);
  }

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={handleInput}
          type="text"
          name="qr-code"
          placeholder="Enter your link here"
        />
        <button onClick={generateQrCode}>Generate</button>
      </div>
      <div className="qr-code">
        {/* <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#ffffff"/>  */}
        {/* <QRCode value={qrCode} /> */}
        {qrCode && <QRCode value={qrCode} size={400}/>}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
