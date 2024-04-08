// For this component, the class and the html content all can be defined outside the component

function SetColorButton({ children, buttonType = "primary", onClick }) {
  return (
    <>
      <button
        class={"btn btn-" + buttonType}
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}

export default SetColorButton;
