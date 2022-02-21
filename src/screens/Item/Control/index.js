import React, { useState } from "react";
import cn from "classnames";
import styles from "./Control.module.sass";
import Checkout from "./Checkout";
import Bid from "../../../components/Bid";
import Accept from "./Accept";
import PutSale from "./PutSale";
import SuccessfullyPurchased from "./SuccessfullyPurchased";
import Modal from "../../../components/Modal";
import FolowSteps from "../../../screens/UploadDetails/FolowSteps";
import Purchase from "../../../components/Purchase";

const Control = ({ className }) => {
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const [visibleModalAccept, setVisibleModalAccept] = useState(false);
  const [visibleModalSale, setVisibleModalSale] = useState(false);

  //console.log(visibleModalBid)

  return (
    <>
      <div className={cn(styles.control, className)}>
        <div className={styles.head}>
          <div className={styles.avatar}>
            <img src="/images/discover/icon-avatar-discover.svg" alt="Avatar" />
          </div>
          <div className={styles.details}>
            <div className={styles.info}>
              Highest bid by <span>Kohaku Tora</span>
            </div>
            <div className={styles.cost}>
              <div className={styles.price}>1.46 ETH</div>
              <div className={styles.price}>$2,764.89</div>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button
            className={cn("button", styles.button)}
            onClick={() => {
              setVisibleModalPurchase(true);
              setTimeout(()=>{
                setVisibleModalPurchase(false);
              },10);
            }}
          >
            Purchase now
          </button>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={() => {
              setVisibleModalBid(true);
              setTimeout(()=>{
                setVisibleModalBid(false);
              },10);
            }}
          >
            Place a bid
          </button>
        </div>
        <div className={styles.text}>
          Service fee <span className={styles.percent}>1.5%</span>{" "}
          <span>2.563 ETH</span> <span>$4,540.62</span>
        </div>
      </div>
      <Modal
        visible={visibleModalPurchase}
        onClose={() => setVisibleModalPurchase(false)}
      >
        <Checkout />
      </Modal>
      <Bid showBid={visibleModalBid} />
      <Purchase showPurchase={visibleModalPurchase} />
    </>
  );
};

export default Control;
