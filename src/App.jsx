import Message from "./Message"; // "."means the current folder
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import HintButton from "./components/HintButton";
import SetColorButton from "./components/setColorButton";
import { useState } from "react";
import WarningBadge from "./components/WarningBadge";
import PostList from "./components/post-list";

// In <Message />, the / is the syntax for a self-closing tag
function App() {
  let cities = ["New York", "Beijing", "Xinjiang", "Shanxi", "Gansu"];
  let heading1 = "City";

  let handleSelectItem = (itemName) => {
    console.log(itemName);
  };

  const hintList = [
    "This is a primary button",
    "This is a secondary button",
    "This is a success button",
    "This is a danger button",
  ];

  const [currentButtonIndex, setButtonIndex] = useState(0);
  let handleClickedButton = (buttonIndex) => {
    setButtonIndex(buttonIndex);
    if (buttonIndex === hintList.length) {
      setButtonIndex(0);
    }
  };

  // determine whether the warning badge is visible or not
  const [alterVisible, setAlertVisible] = useState(false);

  return (
    <>
      <Alert>
        <h3>Man,</h3>
        <span>what can i say</span>
      </Alert>
      <ListGroup
        items={cities}
        heading={heading1}
        onSelectItem={handleSelectItem}
      />
      <HintButton onClickButton={handleClickedButton} />
      <span>{currentButtonIndex}</span>

      <SetColorButton
        buttonType="warning"
        onClick={() => setAlertVisible(true)}
      >
        Open a Warning
      </SetColorButton>

      {alterVisible && <WarningBadge onClose={() => setAlertVisible(false)} />}

      {/* All posts */}
      <PostList />
    </>
  );
}

export default App;
