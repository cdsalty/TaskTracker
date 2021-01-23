import React from "react";

const Button = ({ color, text }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }} className="btn">
        {text}
      </button>
    </div>
  );
};

export default Button;
