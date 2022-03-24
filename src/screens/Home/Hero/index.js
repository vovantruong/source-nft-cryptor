import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import Banner from "../../Home/Hero/banner";
import Connect from "../../../components/Connect";
import Modal from "../../../components/Modal";

const Description = () => {
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  return (
    <>
    <div className={styles.section}
      style={{
        backgroundImage: "url(/images/home/game.jpg)",
      }}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
            The Future of the Creative Economy
          </h1>
          <div className={styles.text}>
            CREATE, EXPLORE, & COLLECT DIGITAL ART NFTS.
          </div>
          <div className={styles.btns}>
            <button
              className={cn("button", styles.button)}
              onClick={() => setVisibleModalBid(true)}
            >
              Place a bid
            </button>
            <Link className={cn("button-stroke", styles.button)} to="/search01">
              Explore Item
            </Link>
          </div>
        </div>
        <Banner></Banner>
      </div>
    </div>
    <Modal
    visible={visibleModalBid}
    onClose={() => setVisibleModalBid(false)}
  >
    <Connect />
  </Modal>
  </>
  );
};

export default Description;
