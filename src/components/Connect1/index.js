import React from "react";
import cn from "classnames";
import styles from "./Connect.module.sass";
import Icon from "../Icon";

const Connect = ({ className }) => {
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  }
  return (
    <div className={cn(className, styles.connect)}>
      <div className={styles.icon}>
        <Icon name="wallet" size="24" />
      </div>
      <div className={styles.info}>
        You need to connect your wallet first to sign messages and send
        transaction to Ethereum network
      </div>
      <div className={styles.btns}>
        <a className={cn("button", styles.button)} href="/connect-wallet1">Connect wallet</a>
        <button className={cn("button-stroke", styles.button)} onClick={() => cancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default Connect;
