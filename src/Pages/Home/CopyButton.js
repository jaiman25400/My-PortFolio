import React, { useState } from "react";
import clipboardCopy from "clipboard-copy";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await clipboardCopy(text);
      setCopied(true);
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick} className="copy-button-div">
        {copied ? (
          <img
            src="./img/CopyDone.png"
            alt="Coppied !"
            className="clipbard-copy-image"
          />
        ) : (
          <img
            src="./img/Copy.png"
            alt="Copy !"
            className="clipbard-copy-image"
          />
        )}
      </button>
    </div>
  );
}

export default CopyButton;
