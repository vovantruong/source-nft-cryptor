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

const royaltiesOptions = ["ETH", "BNB", "Polygon"];
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
    const [visibleModal, setVisibleModal] = useState(false);
    const [price, setPrice] = useState(false);
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
                    <form className={styles.form} action="">
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.fieldset}>
                                    <div className={styles.row}>
                                        <div className={styles.col}>
                                            <div className={styles.field}>
                                                <div className={styles.label}>Price</div>
                                                <Dropdown
                                                    className={styles.dropdown}
                                                    value={royalties}
                                                    setValue={setRoyalties}
                                                    options={royaltiesOptions}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.col}>
                                            <TextInput
                                                className={styles.field}
                                                label="Size"
                                                name="Size"
                                                type="text"
                                                placeholder="amount"
                                                required
                                            />
                                        </div>
                                        <div className={styles.col}>
                                            <TextInput
                                                className={styles.field}
                                                label="Duration"
                                                name="Propertie"
                                                type="text"
                                                placeholder="7 Days"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <button
                                className={cn("button-stroke tablet-show", styles.button)}
                                onClick={() => setVisiblePreview(true)}
                                type="button"
                            >
                                Preview
                            </button>
                            <button
                                className={cn("button", styles.button)}
                                onClick={() => setVisibleModal(true)}
                                // type="button" hide after form customization
                                type="button"
                            >
                                <span>Create item</span>
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