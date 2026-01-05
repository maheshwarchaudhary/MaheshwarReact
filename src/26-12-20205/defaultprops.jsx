function DefaultPropsExample({ text, onClick }) {
  return (
    <div>
      <h2>{text}</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

// Default props
DefaultPropsExample.defaultProps = {
  text: "This is default text",
  onClick: () => {
    console.log("Default click executed");
  }
};

export default DefaultPropsExample;
