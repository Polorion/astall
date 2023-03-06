import * as React from "react";
import S from "./MyButton.module.scss";

const MyButton = ({ Img, action }) => {
  return (
    <button
      onClick={() => {
        action();
      }}
    >
      {<Img />}
    </button>
  );
};

export default MyButton;
