import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Bid.module.sass";
import Modal from "../../components/Modal";
import FolowSteps from "../../screens/UploadDetails/FolowSteps_PlaceBid";

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


const Bid = ({ className, showBid }) => {
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const [visibleModalFolowSteps, setVisibleModalFolowSteps] = useState(false);
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };
  
  useEffect(()=>{
    if(showBid){
      setVisibleModalBid(true)
    }
  },[showBid])

  const hide = () => {
    document.querySelectorAll("#modal")[0].style.display = "none";
    document.querySelector("body").style = "";
  }

  return (
    <>
      <Modal
        visible={visibleModalBid}
        onClose={() => {
          setVisibleModalBid(false);
        }}
      >
        <div className={cn(className, styles.checkout)}>
          <div className={cn("h4", styles.title)}>Place a bid</div>
          <div className={styles.info}>
            You are about to purchase <strong>C O I N Z</strong> from{" "}
            <strong>UI8</strong>
          </div>
          <div className={styles.stage}>Your bid</div>
          <div className={styles.table}>
            {items.map((x, index) => (
              <div className={styles.row} key={index}>
                <div className={styles.col}>{x.title}</div>
                <div className={styles.col}>{x.value}</div>
              </div>
            ))}
          </div>
          <div className={styles.btns}>
            <button
              className={cn("button", styles.button)}
              className={cn("button-stroke", styles.button)}
              onClick={() => {setVisibleModalFolowSteps(true); hide()}}
            >
              Place a bid
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
        visible={visibleModalFolowSteps}
        onClose={() => setVisibleModalFolowSteps(false)}
      >
        <FolowSteps />
      </Modal>
    </>
  );
};

export default Bid;
