import React from "react";
import cn from "classnames";
import styles from "./PageNotFound.module.sass";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.not__found}>
        <h1>404 Page Not Found</h1>
        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" />
        <Link to="/" className={cn("button",styles.btn)}>Go to home</Link>
    </div>
  );
};

export default PageNotFound;
