import React from "react";
import cn from "classnames";
import styles from "./Listings.module.sass";
import { Link } from "react-router-dom";

const data = [
  {
    price: "$0,97",
    from: "0x64shiuh",
    to: "0x43asdas",
    date: "4 days ago",
  },
];

const Listings = () => {
  return (
    <div className={styles.listings}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <td>Price</td>
              <td>From</td>
              <td>To</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => (
              <tr key={index}>
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
  );
};

export default Listings;
