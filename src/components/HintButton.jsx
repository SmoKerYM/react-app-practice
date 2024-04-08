import { useState } from "react";

/**
 * @param {(buttonIndex:int) => void} onClickButton - click the button will send the index of the button to the APP
 */
function HintButton({ onClickButton }) {
  // Remember to wrap the parameter with {}
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonNameList = ["Primary", "Secondary", "Success", "Danger"];
  const buttonClassList = [
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
  ];

  function changeButton() {
    setButtonIndex(buttonIndex + 1);
    if (buttonIndex == buttonNameList.length - 1) {
      // IF exceed the length limit
      setButtonIndex(0);
    }
  }

  return (
    <button
      type="button"
      class={buttonClassList[buttonIndex]}
      onClick={() => {
        changeButton(); // Remember to add () at the end of the function to call it, rather than just referencing to it
        onClickButton(buttonIndex + 1);
      }}
    >
      {buttonNameList[buttonIndex]}
    </button>
  );
}

export default HintButton;
