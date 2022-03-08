import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offers.module.sass";

const data = [
  {
    price: "$0,97",
    from: "0x64shiuh",
    to: "0x43asdas",
    date: "4 days ago",
  },
  {
    price: "$0,97",
    from: "0xLNG",
    to: "0x64shiuh",
    date: "4 days ago",
  },
  {
    price: "$0,97",
    from: "NullAddress",
    to: "you",
    date: "4 days ago",
  },
];

const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.table}>
        <table>
          <thead>
            <td>Price</td>
            <td>From</td>
            <td>To</td>
            <td>Date</td>
          </thead>
          <tbody>
            {data.map((e, index) => (
              <tr>
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

export default Offers;
