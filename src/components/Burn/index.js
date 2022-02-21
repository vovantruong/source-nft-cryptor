import React from "react";
import cn from "classnames";
import styles from "./Burn.module.sass";

const Burn = ({ className }) => {
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Burn token</div>
      <div className={styles.text}>
        Are you sure to burn this token? This action cannot be undone. Token
        will be transfered to zero address
      </div>
      <div className={styles.btns}>
        <button className={cn("button-pink", styles.button)}>Continue</button>
        <button className={cn("button-stroke", styles.button)}onClick={() => cancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default Burn;
