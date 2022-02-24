import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./ConnectWallet.module.sass";
import Icon from "../../components/Icon";
import Checkbox from "../../components/Checkbox";

const menu = [
  {
    id: 1,
    title: "MetaMask Wallet",
    color: "#f5841f",
    img: "images/metamask.png",
  },
  {
    id: 2,
    title: "Coin98 Wallet",
    color: "#5d5434",
    img: "images/coin98.png",
  },
  {
    id: 3,
    title: "Trust Wallet",
    color: "#598fc8",
    img: "images/trust.png",
  },
  {
    id: 4,
    title: "Safepal Wallet",
    color: "#9d9d9d",
    img: "images/safepal.png",
  },
];

const Connect = () => {
  const [age, setAge] = useState(true);
  const [conditions, setConditions] = useState(false);

  const selecionClickConnect = (id) => {
    if (id == 1) {
      console.log(1);
    } else if (id == 2) {
      console.log(2);
    } else if (id == 3) {
      console.log(3);
    } else {
      console.log(4);
    }
  };

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <Link className={styles.back} to="/Home">
            <Icon name="arrow-prev" size="24" />
            <div className={cn("h2", styles.stage)}>Connect your wallet</div>
          </Link>
        </div>
        <div className={styles.body}>
          <div className={styles.menu}>
            {menu.map((x, index) => (
              <div
                className={cn(
                  { [styles.active]: index === conditions },
                  styles.link
                )}
                onClick={() => {
                  conditions || conditions === 0
                    ? setConditions(false)
                    : setConditions(index);
                  selecionClickConnect(x.id);
                }}
                key={index}
              >
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img className={styles.iconWallet} src={x.img} />
                  <Icon name="check" size="18" fill={x.color} />
                </div>
                <span>{x.title}</span>
                <div className={styles.arrow}>
                  <Icon name="arrow-next" size="14" />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <div className={cn("h3", styles.title)}>Scan to connect</div>
              <div className={styles.box}>
                <div className={styles.code}>
                  <img
                    src="/images/content/connect-wallet-2-pic.svg"
                    alt="Qr-code"
                  />
                </div>
              </div>
              <button className={cn("button-stroke", styles.button)}>
                Don’t have a wallet app?
              </button>
            </div>
            <div className={styles.item}>
              <div className={cn("h3", styles.title)}>Terms of service</div>
              <div className={styles.text}>
                Please take a few minutes to read and understand{" "}
                <span>Stacks Terms of Service</span>. To continue, you’ll need
                to accept the terms of services by checking the boxes.
              </div>
              <div className={styles.preview}>
                <img
                  srcSet="/images/content/connect-pic@2x.jpg 2x"
                  src="/images/content/connect-wallet-3-pic.svg"
                  alt="Connect wallet"
                />
              </div>
              <div className={styles.variants}>
                <Checkbox
                  className={styles.checkbox}
                  value={age}
                  onChange={() => setAge(!age)}
                  content="I am at least 13 year old"
                />
                <Checkbox
                  className={styles.checkbox}
                  value={conditions}
                  onChange={() => setConditions(!conditions)}
                  content="I agree Stack terms of service"
                />
              </div>
              <div className={styles.btns}>
                <button className={cn("button-stroke", styles.button)}>
                  Cancel
                </button>
                <button className={cn("button", styles.button)}>
                  Get started now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
