import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Info.module.sass";
import Users from "../Users";

const users = [
  {
    name: "Raquel Will",
    position: "Owner",
    avatar: "/images/discover/icon-avatar-discover.svg",
  },
];

const Info = () => {
  return (
    <div className={styles.info__block}>
      <Users className={styles.users} items={users} />
      <div className={styles.info__detail}>
        <h3>Detail</h3>
        <ul>
          <li>
            Contract Address{" "}
            <Link
              onClick={() => navigator.clipboard.writeText("0x495f...7b5e")}
              to="/profile"
            >
              0x495f...7b5e
            </Link>
          </li>
          <li>
            Token ID
            <span
              onClick={() => navigator.clipboard.writeText("4839772066472669")}
            >
              4839772066472669...
            </span>
          </li>
          <li>
            Token Standard<span>ERC-1155</span>
          </li>
          <li>
            Blockchain<span>Ethereum</span>
          </li>
          <li>
            Metadata<span>Editable</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
