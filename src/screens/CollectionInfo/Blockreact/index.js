import React, { useState } from "react";
import styles from "./Blockreact.module.sass";
import cn from "classnames";

const Blockreact = ({ className, src }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className={cn(styles.blockreact, className)}>
      <div className={styles.block__header}>
        <i className="fab fa-ethereum"></i>
        <div className={styles.favorite}>
          <button onClick={() => setFavorite(!favorite)}>
            {favorite ? (
              <>
                <i style={{ color: "#A92E71" }} className={cn("fas fa-heart",styles.heart)}></i>
                <span style={{ color: "#A92E71" }}>1</span>
              </>
            ) : (
              <>
                <i style={{fontWeight: 500}} className={cn("fal fa-heart",styles.heart)}></i>
                <span>0</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className={styles.block__body}>
        <img src={src} />
      </div>
    </div>
  );
};

export default Blockreact;
