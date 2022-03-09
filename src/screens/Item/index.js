import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";
import ItemActivity from "./ItemActivity";
import MoreCollection from "./MoreCollection";
import Info from "./Info";
import Listings from "./Listings";
import PriceHistory from "./PriceHistory";
import Offers from "./Offers";

const navLinks = ["Info", "Listings", "Offers", "Price History"];

const categories = [
  {
    category: "black",
    content: "art",
  },
  {
    category: "purple",
    content: "unlockable",
  },
];

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TabView = () => {
    if (activeIndex == 0) {
      return <Info />;
    } else if (activeIndex == 1) {
      return <Listings />;
    } else if (activeIndex == 2) {
      return <Offers />;
    } else {
      return <PriceHistory />;
    }
  };

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container")}>
          <div className={styles.row}>
            <div className={styles.bg}>
              <div className={styles.preview}>
                <div className={styles.categories}>
                  {categories.map((x, index) => (
                    <div
                      className={cn(
                        { "status-black": x.category === "black" },
                        { "status-purple": x.category === "purple" },
                        styles.category
                      )}
                      key={index}
                    >
                      {x.content}
                    </div>
                  ))}
                </div>
                <img
                  srcSet="/images/ViewItem/Img_View.svg"
                  src="/images/ViewItem/Img_View.svg"
                  alt="Item"
                />
              </div>
              <Options className={styles.options} />
            </div>
            <div className={styles.details}>
              <h1 className={cn("h3", styles.title)}>The amazing art</h1>
              <div className={styles.cost}>
                <div className={cn("status-stroke-green", styles.price)}>
                  2.5 ETH
                </div>
                <div className={cn("status-stroke-black", styles.price)}>
                  $4,429.87
                </div>
                <div className={styles.counter}>10 in stock</div>
              </div>
              <div className={styles.info}>
                This NFT Card will give you Access to Special Airdrops.
              </div>
              <div className={styles.nav}>
                {navLinks.map((x, index) => (
                  <button
                    className={cn(
                      { [styles.active]: index === activeIndex },
                      styles.link
                    )}
                    onClick={() => setActiveIndex(index)}
                    key={index}
                  >
                    {x}
                  </button>
                ))}
              </div>
              {TabView()}
              <Control className={styles.control} />
            </div>
          </div>
          <ItemActivity className={styles.mr__top} />
          <MoreCollection className={styles.mr__top} />
        </div>
      </div>
    </>
  );
};

export default Item;
