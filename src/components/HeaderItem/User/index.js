import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";
import Theme from "../../Theme";

const User = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <a className={styles.head} onClick={() => setVisible(!visible)} href="/Home">
          {/* <div className={styles.avatar}>
            <img src="/images/home/avatar-women-red.svg" alt="Avatar" />
          </div> */}
          <div className={styles.wallet}>
            <span className={styles.currency}>Connect Wellet</span>
          </div>
        </a>
        {/* {visible && (
          <div className={styles.body}>
            <div className={styles.name}>Enrico Cole</div>
            <div className={styles.code}>
              <div className={styles.number}>0xc4c16ab5ac7d...b21a</div>
              <button className={styles.copy}>
                <Icon name="copy" size="16" />
              </button>
            </div>
            <div className={styles.wrap}>
              <div className={styles.line}>
                <div className={styles.preview}>
                  <img
                    src="/images/content/etherium-circle.jpg"
                    alt="Etherium"
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.info}>Balance</div>
                  <div className={styles.price}>4.689 ETH</div>
                </div>
              </div>
              <button
                className={cn("button-stroke button-small", styles.button)}
              >
                Manage fun on Coinbase
              </button>
            </div>
          </div>
        )} */}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
