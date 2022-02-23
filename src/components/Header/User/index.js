import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";
import Theme from "../../Theme";

const items = [
  {
    title: "My profile",
    icon: "user",
    url: "/profile1",
  },
  {
    title: "My items",
    icon: "image",
    url: "/item1",
  },
  {
    title: "Dark theme",
    icon: "bulb",
  },
  // {
  //   title: "Disconnect",
  //   icon: "exit",
  //   url: "/",
  // },
];

const User = ({ className, userBalance, defaultAccount, copyDefaultAccount, dataConnect }) => {
  const [visible, setVisible] = useState(false);

  const disconnect = () => {
    dataConnect(!dataConnect);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img src="/images/home/avatar-women-red.svg" alt="Avatar" />
          </div>
          <div className={styles.wallet}>
            {userBalance} <span className={styles.currency}>ETH</span>
          </div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.name}>
              Enrico Cole
            </div>
            <div className={styles.code}>
              <div className={styles.number}>{defaultAccount}</div>
              <button className={styles.copy} onClick={() => navigator.clipboard.writeText(copyDefaultAccount)}>
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
                  <div className={styles.price}>{userBalance} ETH</div>
                </div>
              </div>
              <button
                className={cn("button-stroke button-small", styles.button)}
              >
                Manage fun on Coinbase
              </button>
            </div>
            <div className={styles.menu}>
              {items.map((x, index) =>
                x.url ? (
                  x.url.startsWith("http") ? (
                    <a
                      className={styles.item}
                      href={x.url}
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <div className={styles.icon}>
                        <Icon name={x.icon} size="20" />
                      </div>
                      <div className={styles.text}>{x.title}</div>
                    </a>
                  ) : (
                    <Link
                      className={styles.item}
                      to={x.url}
                      onClick={() => setVisible(!visible)}
                      key={index}
                    >
                      <div className={styles.icon}>
                        <Icon name={x.icon} size="20" />
                      </div>
                      <div className={styles.text}>{x.title}</div>
                    </Link>
                  )
                ) : (
                  <div className={styles.item} key={index}>
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="20" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                    <Theme className={styles.theme} />
                  </div>
                )
              )}
              <a
                className={styles.item}
                onClick={() => disconnect()}
              // connect={dataConnect}
              // key={index}
              >
                <div className={styles.icon}>
                  <Icon name="exit" className={styles.icon} size="20" />
                </div>
                <div className={styles.text}>Disconnect</div>
              </a>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;

