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

const royaltiesOptions = ["Sell to highest bidder", "Sell with declining price"];
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

const SellNFT = () => {
    const [royalties, setRoyalties] = useState(royaltiesOptions[0]);
    const [price, setPrice] = useState(priceOptions[0]);
    const [visibleModal, setVisibleModal] = useState(false);
    // const [price, setPrice] = useState(false);
    const [visiblePreview, setVisiblePreview] = useState(false);
    const [locking, setLocking] = useState(false);
    const [sale, setSale] = useState(true);
    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrapper}>
                    <div className={styles.head}>
                        <div className={cn("h2", styles.title)}>
                            List item for sale
                        </div>
                    </div>
                    <div className={styles.icon_method}>
                        <div className={styles.label}>Type</div>
                        <div className={styles.iconWaring}><Icon name="info-circle" size="22" /></div>
                    </div>
                    <div className={styles.btnSellNFT}>
                        <button className={styles.button}
                            type="button">
                            <div className={styles.icon_time}>
                                <i class="fas fa-hourglass-half"></i>
                            </div>
                            Timed auctions
                        </button>
                        <button className={styles.button}
                            type="button">
                            <div className={styles.advanced}>
                                <i class="fas fa-braille"></i>
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
                                                    <div className={styles.iconWaring}><Icon name="info-circle" size="22" /></div>
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
                                                        <div className={styles.textDuration}><i class="fas fa-calendar"></i><span className={styles.spDuration}>Duration</span></div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.inclue}>
                                                <div className={styles.text}>Include reserve price</div>
                                                <div className={styles.iconWaring}><Icon name="info-circle" size="22" /></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.fees_icon}>
                            <div className={styles.text}>Fees</div>
                            <div className={styles.iconWaring}><Icon name="info-circle" size="22" /></div>
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