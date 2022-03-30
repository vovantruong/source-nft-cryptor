import React, { useState, useEffect } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./DropdownFaq.module.sass";
import Icon from "../../../components/Icon";

const DropdownFaq = ({ className, options, id, setID,title,setTitle }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (value,title) => {
    setTitle(title);
    setID(value);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(styles.dropdown, className, { [styles.active]: visible })}
      >
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.selection}>{title}</div>
          <div className={styles.arrow}>
            <Icon name="arrow-bottom" size="10" />
          </div>
        </div>
        <div className={styles.body}>
          {options.map((x, index) => (
            <div
              className={cn(styles.option, {
                [styles.selectioned]: x.id === id,
              })}
              onClick={() => handleClick(x.id, x.title, index)}
              key={index}
            >
              {x.title}
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default DropdownFaq;
