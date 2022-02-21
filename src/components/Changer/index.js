import React from "react";
import cn from "classnames";
import styles from "./Changer.module.sass";

const Transfer = ({ className }) => {
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Transfer token</div>
      <div className={styles.text}>
      NEW PRICE
      </div>
      <div className={styles.field}>
        <input
          className={styles.input}
          type="text"
          name="address"
          placeholder=""
        />
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>Changer price</button>
        <button className={cn("button-stroke", styles.button)} onClick={() => cancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default Transfer;
