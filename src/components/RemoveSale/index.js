import React from "react";
import cn from "classnames";
import styles from "./RemoveSale.module.sass";

const RemoveSale = ({ className }) => {
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Remove from sale</div>
      <div className={styles.text}>
        Do you really want to remove your item from sale? You can put it on sale
        anytime
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>Remove now</button>
        <button className={cn("button-stroke", styles.button)}onClick={() => cancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default RemoveSale;
