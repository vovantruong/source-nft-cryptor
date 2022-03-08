import React, { useState } from "react";
import styles from "./PriceHistory.module.sass";
import cn from "classnames";
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
    <div className={styles.price__history}>
      <div className={styles.row}>
        <div className={styles.item__dropdown}>
          <Dropdown value={item} setValue={setItem} options={itemOptions} />
        </div>
        <div className={styles.show__value}>
          <h4>All Time Avg. Price </h4>
          <span>Ξ0,97</span>
        </div>
      </div>
      <div className={styles.chart__item}>
        <img src="https://opensea.io/static/images/no-chart-data.svg" />
        <p>No item activity yet</p>
      </div>
    </div>
  );
};

export default PriceHistory;
