import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card_auction.module.sass";
import Icon from "../Icon";
import Bid from "../Bid";

const CardAuction = ({ className, item }) => {
  const [visible, setVisible] = useState(false);
  const time = new Date().toLocaleTimeString();
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  return (
    <>
    <div className={cn(styles.card, className)}>
        <div className={styles.preview}>
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
          <div className={styles.control}>
            <div
              className={cn(
                { "status-green": item.category === "green" },
                styles.category
              )}
            >
              {item.categoryText}
            </div>
            <button
              className={cn(styles.favorite, { [styles.active]: visible })}
              onClick={() => setVisible(!visible)}
            >
              <Icon name="heart" size="20" />
            </button>
            <div className={styles.button}>
              <div className={styles.currentTiem} style={{ fontSize: 15 }}>{time}</div>
            </div>
          </div>
        </div>
        <Link
          className={styles.link}
          to={item.url}
        >
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item.title.length > 14
              ? item.title.slice(0, 14) + "..."
              : item.title
              }
              {"  "}</div>
              <div className={styles.price}>{item.price}</div>
            </div>
            <div className={styles.line}>
              <div className={styles.users}>
                {item.users.map((x, index) => (
                  <div className={styles.avatar} key={index}>
                    <img src={x.avatar} alt="Avatar" />
                  </div>
                ))}
              </div>
              <div className={styles.counter}>{item.counter}</div>
            </div>
          </div>
          <div className={styles.foot}>
            <div className={styles.status}>
              <Icon name="candlesticks-up" size="20" />
              Highest bid <span className={styles.highest}>{item.highestBid}</span>
            </div>
            <div
              className={styles.bid}
              dangerouslySetInnerHTML={{ __html: item.bid }}
            />
          </div>
        </Link>
      </div>
      <Bid showBid={visibleModalBid} />
    </>
  );
};

export default CardAuction;
