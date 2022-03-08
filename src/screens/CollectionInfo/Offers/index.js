import React, { useState } from "react";
import cn from "classnames";
import styles from "./Offers.module.sass";

const Offers = () => {
  const [dropdown, setDropdown] = useState(true);
  return (
    <div className={styles.offers}>
      <div
        className={cn(styles.block__offers, styles.dropdown)}
        onClick={() => setDropdown(!dropdown)}
      >
        <div>
          <i className="fab fa-buffer"></i>
          <span>Offers</span>
        </div>
        <button className={styles.btn__drop}>
          {dropdown ? (
            <i className="fal fa-angle-up"></i>
          ) : (
            <i className="fal fa-angle-down"></i>
          )}
        </button>
      </div>
      <div
        style={dropdown ? { display: "block" } : { display: "none" }}
        className={styles.item__offers}
      >
        <div className={styles.item__active}>
          <img src="https://opensea.io/static/images/empty-bids.svg" />
          <p>No ofers yet</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
