import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./CollectionInfo.module.sass";
import Blockreact from "./Blockreact";
import Description from "./Description";

const img = "/images/discover/img-discover-01.svg"

const CollectionInfo = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top__active}>
          <Link className={cn("button-stroke", styles.btn)}>Edit</Link>
          <Link className={cn("button", styles.btn)}>Sale</Link>
        </div>
        <div className={styles.row}>
          <div className={styles.left__wrapper}>
              <Blockreact src={img} />
              <Description />
          </div>
          <div className={styles.right__wrapper}>
            <section className={styles.item__header}>
              <div className={styles.item__collection__info}>
                <div className={styles.item__collection__detail}>
                  <Link>Enrico Cole</Link>
                </div>
                <div className={styles.item__collection__toolbar}>
                 <button><i className="far fa-redo"></i></button>
                 <button><i className="fas fa-paper-plane"></i></button>
                 <button><i className="fas fa-share-alt"></i></button>
                 <button><i className="fas fa-ellipsis-v"></i></button>
                </div>
              </div>
              <h1 className={styles.item__title}>NFT name</h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
