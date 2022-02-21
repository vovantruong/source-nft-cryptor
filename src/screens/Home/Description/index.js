import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.stage}>Save your time with Stacks</div>
          <h1 className={cn("h1", styles.title)}>
            Earn free crypto with Crypter
          </h1>
          <div className={styles.text}>
            A creative agency that lead and inspire
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/upload-variants">
              Create item
            </Link>
            <Link className={cn("button-stroke", styles.button)} to="/search01">
              Discover more
            </Link>
          </div>
        </div>
        <div className={styles.gallery}>
          <Image
            srcSet="/images/home/cryptor.png 2x"
            src="/images/home/cryptor.png"
            srcDark="/images/home/cryptor.png"
            alt="chat"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
