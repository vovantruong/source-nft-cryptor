import React, { useState } from "react";
import cn from "classnames";
import styles from "./Checkout.module.sass";
import Icon from "../../../../components/Icon";
// import LoaderCircle from "../../../../components/LoaderCircle";
import Flow_Steps from "../Flow_Steps";
import Modal from "../../../../components/Modal";
import SuccessfullyPurchased from "../SuccessfullyPurchased";

const items = [
  {
    title: "0.007",
    value: "ETH",
  },
  {
    title: "Your balance",
    value: "8.498 ETH",
  },
  {
    title: "Service fee",
    value: "0 ETH",
  },
  {
    title: "You will pay",
    value: "0.007 ETH",
  },
];

const Checkout = ({ className }) => {
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  return (
    <>
      <div className={cn(className, styles.checkout)}>
        <div className={cn("h4", styles.title)}>Checkout</div>
        <div className={styles.info}>
          You are about to purchase <strong>C O I N Z</strong> from{" "}
          <strong>UI8</strong>
        </div>
        <div className={styles.table}>
          {items.map((x, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>{x.title}</div>
              <div className={styles.col}>{x.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.attention}>
          <div className={styles.preview}>
            <Icon name="info-circle" size="32" />
          </div>
          <div className={styles.details}>
            <div className={styles.subtitle}>This creator is not verified</div>
            <div className={styles.text}>
              Purchase this item at your own risk
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button
            className={cn("button", styles.button)}
            className={cn("button", styles.button)}
            onClick={() => setVisibleModalPurchase(true)}
          >
            I understand, continue
          </button>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={() => cancel()}
          >
            Cancel
          </button>
        </div>
      </div>
      <Modal
        visible={visibleModalPurchase}
        onClose={() => setVisibleModalPurchase(false)}
      >
        <Flow_Steps />
      </Modal>
    </>
  );
};

export default Checkout;
