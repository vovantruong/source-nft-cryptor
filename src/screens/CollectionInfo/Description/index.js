import React, { useState } from "react";
import cn from "classnames";
import styles from "./Description.module.sass";
import { Link } from "react-router-dom";

const Description = ({ className }) => {
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownDetail, setDropdownDetail] = useState(false);
  return (
    <div className={cn(className, styles.description)}>
      <div className={cn(styles.block__desc)}>
        <i className="fas fa-align-justify"></i>
        <span className={styles.title}>Description</span>
      </div>
      <div className={cn(styles.block__desc, styles.link)}>
        <p>
          Create by <Link>you</Link>
        </p>
      </div>
      <div className={styles.about}>
        <div
          className={cn(styles.block__desc, styles.dropdown)}
          onClick={() => setDropdownAbout(!dropdownAbout)}
        >
          <div>
            <i className="fas fa-server"></i>
            <span>About Enrico Cole #13221CAS</span>
          </div>
          <button className={styles.btn__drop}>
            {dropdownAbout ? (
              <i className="fal fa-angle-up"></i>
            ) : (
              <i className="fal fa-angle-down"></i>
            )}
          </button>
        </div>
        <div
          style={dropdownAbout ? { display: "block" } : { display: "none" }}
          className={styles.about__description}
        >
          This collection has no description yet. Contact the owner of this
          collection about setting it up on WomenTech!
        </div>
      </div>
      <div className={styles.detail}>
        <div
          className={cn(styles.block__desc, styles.dropdown)}
          onClick={() => setDropdownDetail(!dropdownDetail)}
        >
          <div>
            <i className="fas fa-ballot"></i>
            <span>Detail</span>
          </div>
          <button className={styles.btn__drop}>
            {dropdownDetail ? (
              <i className="fal fa-angle-up"></i>
            ) : (
              <i className="fal fa-angle-down"></i>
            )}
          </button>
        </div>
        <div
          style={dropdownDetail ? { display: "block" } : { display: "none" }}
          className={styles.detail__description}
        >
          <ul>
            <li>
              Contract Address <Link to="/profile">0x495f...7b5e</Link>
            </li>
            <li>
              Token ID<span>4839772066472669...</span>
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
    </div>
  );
};

export default Description;
