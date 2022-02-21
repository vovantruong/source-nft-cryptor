import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page1.module.sass";
import Header from "../Header";
import Footer from "../Footer";

const Page1 = ({ children }) => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.inner}>{children}</div>
      <Footer />
    </div>
  );
};

export default withRouter(Page1);
