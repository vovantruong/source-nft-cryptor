import React, { useState } from "react";
import cn from "classnames";
import styles from "./Options.module.sass";
import Icon from "../../../components/Icon";
import Actions from "../../../components/Actions";
import { FacebookShareButton, TwitterShareButton } from "react-share";
const shareUrlFacebook = "#";
const shareUrlTwitter = "#";

const Options = ({ className, items }) => {
  const [visibleShare, setVisibleShare] = useState(false);
  
  const handleFavorite = () => {
    const heart = document.querySelector('.heart');
    heart.classList.toggle("confirm");
    const color = document.querySelector(".confirm");
    
    color ? (color.style.fill = "#EF466F") : (heart.style.fill = "#777E90")
  }

  return (
    <div className={cn(styles.options, className)}>
      <button className={cn("button-circle-stroke", styles.button)}
        onClick={() => setVisibleShare(!visibleShare)}>
        <Icon name="share" size="24" />
      </button>
      <button
        className={cn("button-circle-stroke", styles.button, styles.favorite)}
        onClick={() => handleFavorite()}
      >
        <Icon className={cn("heart")} name="heart-fill" size="24"/>
      </button>
      <div className={cn(styles.box, { [styles.active]: visibleShare })}>
        <div className={styles.stage}>Share link to this page</div>
        <div className={styles.share}>
          <TwitterShareButton
            className={styles.direction}
            url={shareUrlTwitter}
          >
            <span>
              <Icon name="twitter" size="20" />
            </span>
          </TwitterShareButton>
          <FacebookShareButton
            className={styles.direction}
            url={shareUrlFacebook}
          >
            <span>
              <Icon name="facebook" size="20" />
            </span>
          </FacebookShareButton>
        </div>
      </div>
      <Actions className={styles.actions} />
    </div>
  );
};

export default Options;
