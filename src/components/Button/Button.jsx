import "./Button.css";
import { useState } from "react";

const Button = () => {
  const [something, setSomething] = useState("Save");

  const clicked = () => {
    setSomething("Exit");
    console.log("Hallo");
  };

  return (
    <>
      <button onClick={clicked} className="btn">
        {something}
      </button>
    </>
  );
};

export default Button;
