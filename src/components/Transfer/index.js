import React from "react";
import cn from "classnames";
import styles from "./Transfer.module.sass";

const Transfer = ({ className }) => {
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Transfer token</div>
      <div className={styles.text}>
        You can transfer tokens from your address to another123
      </div>
      <div className={styles.info}>Receiver address</div>
      <div className={styles.field}>
        <input
          className={styles.input}
          type="text"
          name="address"
          placeholder="Paste address"
        />
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>Continue</button>
        <button className={cn("button-stroke", styles.button)}onClick={() => cancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default Transfer;
