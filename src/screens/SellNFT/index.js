import React, { useState } from "react";
import cn from "classnames";
import styles from "./SellNFT.module.sass";
import Icon from "../../components/Icon";
import Loader from "../../components/Loader";
import Preview from "../UploadDetails/Preview";
import Cards from "../UploadDetails/Cards";
import Switch from "../../components/Switch";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
import Duration from "./Duration";

const royaltiesOptions = [
  "Sell to highest bidder",
  "Sell with declining price",
];
const priceOptions = ["BNB", "ETH", "Polygon"];
const items = [
  {
    title: "Create collection",
    color: "#4BC9F0",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#45B26B",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#EF466F",
  },
  {
    title: "Legend Photography",
    color: "#9757D7",
  },
];

const biddersOptions = [
  "5 bidders",
  "10 bidders",
  "20 bidders",
  "30 bidders",
  "50 bidders",
  "More options",
];

const SellNFT = () => {
  const [royalties, setRoyalties] = useState(royaltiesOptions[0]);
  const [price, setPrice] = useState(priceOptions[0]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [active, setActive] = useState(true);
  const [visiblePreview, setVisiblePreview] = useState(false);
  const [locking, setLocking] = useState(false);
  const [sale, setSale] = useState(true);
  const [bidders, setBidders] = useState(biddersOptions[0]);

  const handleClick = (e, value) => {
    let newArr = value + " bidders";
    if (e.key == "Enter") {
      if (value != "") {
        biddersOptions.push(newArr);
        biddersOptions.sort()
        setBidders(newArr);
        e.target.value = "";
      }
    }
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <div className={cn("h2", styles.title)}>List item for sale</div>
          </div>
          <div className={styles.icon_method}>
            <div className={styles.label}>Type</div>
            <div className={styles.iconWaring}>
              <Icon name="info-circle" size="22" />
              <div className={styles.message__warning}>
                <p>
                  Learn more about the two types of listing options in our{" "}
                  <Link to="sell_nft">Help Center</Link>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.btnSellNFT}>
            <button
              style={
                active
                  ? {
                      color: "#fff",
                      border: "2px solid #f27067",
                      background: "#f27067",
                    }
                  : null
              }
              className={styles.button}
              type="button"
              onClick={() => (active ? null : setActive(!active))}
            >
              <div className={styles.icon_time}>
                <i className="fas fa-hourglass-half"></i>
              </div>
              Timed auctions
            </button>
            <button
              style={
                active
                  ? null
                  : {
                      color: "#fff",
                      border: "2px solid #f27067",
                      background: "#f27067",
                    }
              }
              className={styles.button}
              type="button"
              onClick={() => (active ? setActive(!active) : null)}
            >
              <div className={styles.advanced}>
                <i className="fas fa-person-sign"></i>
              </div>
              Advanced auctions
            </button>
          </div>
          <form className={styles.form} action="">
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.fieldset}>
                  <div className={styles.row}>
                    <div className={styles.col}>
                      <div className={styles.field}>
                        <div className={styles.icon_method}>
                          <div className={styles.label}>Method</div>
                          <div className={styles.iconWaring}>
                            <Icon name="info-circle" size="22" />
                            <div
                              className={cn(
                                styles.message__warning,
                                styles.msg__large
                              )}
                            >
                              <p>
                                List price and listing schedule cannot be edited
                                once the item is listed. You will need to cancel
                                your listing and relist the item with the
                                updated price and dates.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Dropdown
                          className={styles.dropdown}
                          value={royalties}
                          setValue={setRoyalties}
                          options={royaltiesOptions}
                        />
                        <div className={styles.label}>Starting price</div>
                        <div className={styles.starting_price}>
                          <Dropdown
                            className={styles.dropdown}
                            value={price}
                            setValue={setPrice}
                            options={priceOptions}
                          />
                          <TextInput
                            className={styles.field}
                            placeholder="Amount"
                            type="text"
                          />
                        </div>
                        <div className={styles.label}>Duration</div>
                        <div className={styles.Duration}>
                          <button className={styles.btnDuration} type="button">
                            <div className={styles.textDuration}>
                              <i className="fas fa-calendar"></i>
                              <span className={styles.spDuration}>
                                Duration
                              </span>
                            </div>
                          </button>
                          <div className={styles.call__duration}>
                            <Duration />
                          </div>
                        </div>
                        {active ? null : (
                          <>
                            <div
                              style={{ marginTop: 30 }}
                              className={styles.label}
                            >
                              Total Bidders
                            </div>
                            <div className={styles.more__options}>
                              <div className={styles.dropdown__bidders}>
                                <Dropdown
                                  value={bidders}
                                  setValue={setBidders}
                                  options={biddersOptions}
                                />
                              </div>
                              {bidders ==
                              biddersOptions[biddersOptions.length - 1] ? (
                                <TextInput
                                  className={styles.field__bidders}
                                  placeholder="Enter total bidders ..."
                                  type="number"
                                  onKeyPress={(e) =>
                                    handleClick(e, e.target.value)
                                  }
                                />
                              ) : null}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.fees_icon}>
              <div className={styles.text}>Fees</div>
              <div className={styles.iconWaring}>
                <Icon name="info-circle" size="22" />
                <div className={styles.message__warning}>
                  <p>
                    Listing is free. Once sold, the following fees will be
                    deducted.
                    <Link to="sell_nft">Learn more</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.Service}>
              <div className={styles.text}>Service Fee</div>
              <div className={styles.percent}>2.5%</div>
            </div>
            <div className={styles.foot}>
              <button
                className={cn("button", styles.button)}
                onClick={() => setVisibleModal(true)}
                // type="button" hide after form customization
                type="button"
              >
                <span>Complete Listing</span>
                <Icon name="arrow-next" size="10" />
              </button>
              <div className={styles.saving}>
                <span>Auto saving</span>
                <Loader className={styles.loader} />
              </div>
            </div>
          </form>
        </div>
        <Preview
          className={cn(styles.preview, { [styles.active]: visiblePreview })}
          onClose={() => setVisiblePreview(false)}
        />
      </div>
    </div>
  );
};

export default SellNFT;
