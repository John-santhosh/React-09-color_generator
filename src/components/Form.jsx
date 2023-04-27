import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Color Generator</h1>
        <div>
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            name=""
            id=""
          />
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            placeholder={"#5654cf"}
          />
          <button style={{ background: color }}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
