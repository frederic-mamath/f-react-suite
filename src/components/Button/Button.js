import React from "react";

import styles from "./Button.module.scss";

const Button = ({ onClick, text }) => {
  return (
    <button className={styles.view} data-status="error" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
