import React, { useState } from "react";
import cn from "classnames";
import styles from "./ItemActivity.module.sass";
import Dropdown from "../../../components/Dropdown";
import { Link } from "react-router-dom";

const filterOptions = ["Listings", "Sale", "Bid", "Transfers"];

const ItemActivity = () => {
  const [dropdown, setDropdown] = useState(true);
  const [filter, setFilter] = useState(filterOptions[0]);
  return (
    <div
      style={dropdown ? { overflow: "inherit" } : { overflow: "hidden" }}
      className={styles.item__activity}
    >
      <div
        className={cn(styles.block__activity, styles.dropdown)}
        onClick={() => setDropdown(!dropdown)}
      >
        <div>
        <i className="fas fa-sort-alt"></i>
          <span>Item Activity</span>
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
        className={styles.item__dropdown__active}
      >
        <div className={styles.item__active__filter}>
          <Dropdown
            className={styles.filter}
            value={filter}
            setValue={setFilter}
            options={filterOptions}
          />
        </div>
        <div className={styles.item__active__table}>
          <div className={styles.table}>
            <table>
              <thead>
                <td>Event</td>
                <td>Price</td>
                <td>From</td>
                <td>To</td>
                <td>Date</td>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i style={{fontSize: 20}} className="fas fa-baby-carriage"></i> Minted
                  </td>
                  <td></td>
                  <td>
                    <Link to="collection-info">NullAddress</Link>
                  </td>
                  <td>
                    <Link to="collection-info">You</Link>
                  </td>
                  <td>3 Days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemActivity;