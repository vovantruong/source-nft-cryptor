import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.sass";

const Checkbox = ({ className,check, content, value, onChange }) => {
  return (
    <label className={cn(styles.checkbox, className)}>
      <input
        className={styles.input}
        type="checkbox"
        onChange={onChange}
        checked={value}
      />
      <span className={styles.inner}>
        <span className={cn(styles.tick,check)}></span>
        <span className={styles.text}>{content}</span>
      </span>
    </label>
  );
};

export default Checkbox;
