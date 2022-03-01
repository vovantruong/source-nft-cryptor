import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Player.module.sass";
import Icon from "../Icon";

const Player = ({ className, item }) => {
  const [view, setView] = useState(true);

  const handlePlay = () => {
    setTimeout(() => {
      let video = document.querySelector("#video");
      video.play();
    }, 1000);
  };

  return (
    <div
      className={cn(styles.player, className)}
      onClick={() => setView(false)}
    >
      <div className={styles.preview}>
        {view ? (
          <div className={styles.timeline} onClick={() => handlePlay()}>
            <img className={styles.img__start} src={`${item.time}`} />
            <div className={styles.play__control}>
              <i className="fas fa-play"></i>
            </div>
          </div>
        ) : (
          <video controls id="video">
            <source src={`${item.video}`} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

export default Player;
