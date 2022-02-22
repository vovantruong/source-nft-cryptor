import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./UploadVariants.module.sass";
import Control1 from "../../components/Control1";

const breadcrumbs = [
  {
    title: "Home",
    url: "/Home",
  },
  {
    title: "Upload Item",
  },
];

const items = [
  {
    url: "/upload-details1",
    buttonText: "Create Single",
    image: "/images/UploadItem/single.svg",
    image2x: "/images/UploadItem/single.svg",
  },
  {
    url: "/upload-details-mutiple1",
    buttonText: "Create Multiple",
    image: "/images/UploadItem/mutiple.svg",
    image2x: "/images/UploadItem/mutiple.svg",
  },
];

const Upload1 = () => {
  return (
    <div className={styles.page}>
      <Control1 className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Upload item</h1>
            <div className={styles.info}>
              Choose <span>“Single”</span> if you want your collectible to be
              one of a kind or <span>“Multiple”</span> if you want to sell one
              collectible multiple times
            </div>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.preview}>
                  <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Upload" />
                </div>
                <Link className={cn("button-stroke", styles.button)} to={x.url}>
                  {x.buttonText}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            We do not own your private keys and cannot access your funds without
            your confirmation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload1;
