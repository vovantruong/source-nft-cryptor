import React, { useState } from "react";
import cn from "classnames";
import styles from "./PriceHistory.module.sass";
import Dropdown from "../../../components/Dropdown";

const itemOptions = [
  "Last 7 Days",
  "Last 14 Days",
  "Last 30 Days",
  "Last 60 Days",
  "Last 90 Days",
  "All Days",
];

const PriceHistory = () => {
  const [dropdown, setDropdown] = useState(true);
  const [item, setItem] = useState(itemOptions[0]);
  return (
    <div
      style={dropdown ? { overflow: "inherit" } : { overflow: "hidden" }}
      className={styles.price__history}
    >
      <div
        className={cn(styles.block__price__history, styles.dropdown)}
        onClick={() => setDropdown(!dropdown)}
      >
        <div>
          <i className="fas fa-analytics"></i>
          <span>Price History</span>
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
        className={styles.item__price__history}
      >
        <div className={styles.item__active}>
          <Dropdown
            className={styles.item__dropdown}
            value={item}
            setValue={setItem}
            options={itemOptions}
          />
          <img src="https://opensea.io/static/images/no-chart-data.svg" />
          <p>No item activity yet</p>
        </div>
      </div>
    </div>
  );
};

export default PriceHistory;
