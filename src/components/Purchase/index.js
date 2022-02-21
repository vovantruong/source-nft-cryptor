import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Purchase.module.sass";
import Modal from "../../components/Modal";
import Flow_Steps from "../../screens/Item/Control/Flow_Steps";
import Icon from "../../components/Icon";
const items = [
  {
    title: "Enter bid",
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
    title: "Total bid amount",
    value: "0 ETH",
  },
];


const Purchase = ({ className, showPurchase }) => {
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  const [visibleModalFlow_Steps, setVisibleModalFlow_Steps] = useState(false);
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };
  
  useEffect(()=>{
    if(showPurchase){
      setVisibleModalPurchase(true)
    }
  },[showPurchase])

  const hide = () => {
    document.querySelectorAll("#modal")[0].style.display = "none";
    document.querySelector("body").style = "";
  }

  return (
    <>
      <Modal
        visible={visibleModalPurchase}
        onClose={() => {
          setVisibleModalPurchase(false);
        }}
      >
        <div className={cn(className, styles.checkout)}>
          <div className={cn("h4", styles.title)}>Checkout</div>
          <div className={styles.info}>
            You are about to purchase <strong>NFT.</strong>
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
              className={cn("button-stroke", styles.button)}
              onClick={() => {setVisibleModalFlow_Steps(true); hide()}}
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
      </Modal>
      <Modal
        visible={visibleModalFlow_Steps}
        onClose={() => setVisibleModalFlow_Steps(false)}
      >
         <Flow_Steps />
      </Modal>
    </>
  );
};

export default Purchase;
