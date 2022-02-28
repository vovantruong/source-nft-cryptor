import React, { useState } from "react";
import cn from "classnames";
import styles from "./Player.module.sass";
import Icon from "../Icon";

const Player = ({ className, item }) => {
  return (
    <div className={cn(styles.player, className)}>
      <div className={styles.preview}>
        <video controls poster="/images/content/photo-2.1.jpg">
          <source src={`${item.video}`} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default Player;
