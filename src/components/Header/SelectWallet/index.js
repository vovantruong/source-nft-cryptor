import React, { useState } from "react";
import styles from "./SelectWallet.module.sass";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";

const menu = [
  {
    id: 1,
    title: "MetaMask",
    img: "images/metamask.png",
  },
  {
    id: 2,
    title: "Coin98",
    img: "images/coin98.png",
  },
  {
    id: 3,
    title: "Trust Wallet",
    img: "images/trust.png",
  },
  {
    id: 4,
    title: "More",
    img: "images/three-doc.png",
  },
];

const SelectWallet = ({ className, moreWallet }) => {
  const [visible, setVisible] = useState(false);

  const MoreWallet = (id) => {
    if(id == 1){
      //handing connect metamask
      moreWallet();
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.wallet}>Connect Wallet</div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.top}>
              <p>Connect Wallet</p>
            </div>
            <div className={styles.wrap}>
              {menu.map((e) => (
                <div
                  key={e.id}
                  className={styles.all_wallet}
                  onClick={() => (e.id == e.id ? MoreWallet(e.id) : MoreWallet(e.id))}
                >
                  <img src={e.img} />
                  <p className={styles.name}>{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default SelectWallet;
