import "./BlinkingComponent-min.css";

function BlinkingComponent({ children, disappear = false, display = "block" }) {
  return disappear ? (
    ""
  ) : (
    <>
      <div
        className="blinking-component"
        style={{
          display: display,
        }}
      >
        {children}
      </div>
    </>
  );
}

export default BlinkingComponent;
