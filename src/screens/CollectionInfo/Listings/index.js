import React,{useState} from "react";
import cn from "classnames";
import styles from "./Listings.module.sass";

const Listings = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className={styles.listings}>
      <div
        className={cn(styles.block__listings, styles.dropdown)}
        onClick={() => setDropdown(!dropdown)}
      >
        <div>
        <i className="fas fa-tag"></i>
          <span>Listings</span>
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
        className={styles.item__listings}
      >
        <div className={styles.item__active}>
          <img src="https://opensea.io/static/images/empty-asks.svg" />
          <p>No listings yet</p>
        </div>
      </div>
    </div>
  );
};

export default Listings;
