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
    url: "/profile",
  },
  {
    title: "My items",
    icon: "image",
    url: "/item",
  },
  {
    title: "Dark theme",
    icon: "bulb",
  },
  {
    title: "Disconnect",
    icon: "exit",
    check: "disconnect",
  },
];

const MessageCopied = () => {
  const message = document.querySelector(".message");
  message.style.transform = "scale(1)";
  setTimeout(() => {
    message.style.transform = "scale(0)";
  }, 2000);
};

const User = ({
  className,
  userBalance,
  defaultAccount,
  copyDefaultAccount,
  disconnect,
  netCoin,
  urlNetCoin
}) => {
  const [visible, setVisible] = useState(false);

  const urlImg = '/images/content/' + urlNetCoin;

  const DisconnectWallet = () => {
    // window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    disconnect(true);
    // copyDefaultAccount = null;
    // console.log(copyDefaultAccount);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img src="/images/home/avatar-women-red.svg" alt="Avatar" />
          </div>
          <div className={styles.wallet}>
            {userBalance} <span className={styles.currency}>{netCoin}</span>
          </div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.name}>
              Enrico Cole
            </div>
            <div className={styles.code}>
              <div className={cn("number", styles.number)}>
                {defaultAccount}
              </div>
              <button
                className={cn("copy", styles.copy)}
                onClick={() => {
                  navigator.clipboard.writeText(copyDefaultAccount);
                  MessageCopied();
                }}
              >
                <Icon name="copy" size="16" />
                <p className={cn("message", styles.message)}>
                  Copied <i className="fas fa-check"></i>
                </p>
              </button>
            </div>
            <div className={styles.wrap}>
              <div className={styles.line}>
                <div className={styles.preview}>
                  <img
                    src={urlImg}
                    alt="Etherium"
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.info}>Balance</div>
                  <div className={styles.price}>{userBalance.slice(0,5)+"..."} {netCoin}</div>
                </div>
              </div>
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
                ) : x.check ? (
                  <button
                    className={cn(styles.btn, styles.item)}
                    onClick={DisconnectWallet}
                    key={index}
                  >
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="20" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                  </button>
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
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;

