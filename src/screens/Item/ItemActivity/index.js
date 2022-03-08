import React, { useState } from "react";
import cn from "classnames";
import styles from "./ItemActivity.module.sass";
import Dropdown from "../../../components/Dropdown";
import { Link } from "react-router-dom";

const filterOptions = ["Listings", "Sale", "Bid", "Transfers"];
const data = [
  {
    event: "Minted",
    price: "",
    from: "0x64shiuh",
    to: "0x43asdas",
    date: "4 days ago",
  },
  {
    event: "Sale",
    price: "",
    from: "0xLNG",
    to: "0x64shiuh",
    date: "4 days ago",
  },
  {
    event: "Transfer",
    price: "0,97",
    from: "NullAddress",
    to: "you",
    date: "4 days ago",
  },
];

const ItemActivity = ({ className }) => {
  const [dropdown, setDropdown] = useState(true);
  const [filter, setFilter] = useState(filterOptions[0]);
  return (
    <div
      style={dropdown ? { overflow: "auto" } : { overflow: "hidden" }}
      className={cn(styles.item__activity, className)}
    >
      <div
        style={dropdown ? null : { border: "none" }}
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
                {data.map((e, index) => (
                  <tr>
                    <td>
                      <i
                        style={{ fontSize: 20 }}
                        className="fas fa-baby-carriage"
                      ></i>{" "}
                      {e.event}
                    </td>
                    <td>{e.price}</td>
                    <td>
                      <Link to="/item">{e.from}</Link>
                    </td>
                    <td>
                      <Link to="/item">{e.to}</Link>
                    </td>
                    <td>{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemActivity;
