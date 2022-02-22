import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import HeaderItem from "../HeaderItem";
import FooterItem from "../FooterItem";

const Page = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <div className={styles.page}>
      <HeaderItem />
      <div className={styles.inner}>{children}</div>
      <FooterItem />
    </div>
  );
};

export default withRouter(Page);
