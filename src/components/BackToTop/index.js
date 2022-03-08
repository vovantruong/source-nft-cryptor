import React, { useEffect, useState } from "react";
import styles from "./BackToTop.module.sass";
import cn from "classnames";

const BackToTop = ({}) => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className={styles.back_to_top}>
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default BackToTop;
