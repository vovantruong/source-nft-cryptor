import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import Bid from "../Bid";
import Modal from "../Modal";
import FolowSteps from "../../screens/UploadDetails/FolowSteps_PlaceBid";

const Card = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

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
            <button
              className={cn("button-small", styles.button)}
              onClick={() => {
                setVisibleModalBid(true);
                setTimeout(() => {
                  setVisibleModalBid(false);
                }, 10);
              }}
            >
              <span>Place a bid</span>
            </button>
          </div>
        </div>
        <Link
          className={styles.link}
          to={item.url}
          onClick={() =>
            setTimeout(() => {
              window.location.reload();
            }, 10)
          }
        >
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item.title}</div>
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
              Highest bid <span>{item.highestBid}</span>
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

export default Card;
