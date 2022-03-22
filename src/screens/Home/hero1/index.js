import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";
import Banner from "../../Home/hero1/banner";

const Description = () => {
  return (
    <div className={styles.section}
    style={{
      backgroundImage: "url(/images/Home/cryptor.svg)", 
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
            <Link className={cn("button", styles.button)} to="/upload-variants">
              Place a bid
            </Link>
            <Link className={cn("button-stroke", styles.button)} to="/search01">
              View item
            </Link>
          </div>
        </div>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Description;
