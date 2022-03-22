import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./DropdownCheckbox.module.sass";
import Icon from "../Icon";
import Checkbox from "../Checkbox";

const Dropdown = ({ className, value, setValue, options }) => {
  const [visible, setVisible] = useState(false);

  const handleChange = (filter) => {
    if (value.includes(filter)) {
      setValue(value.filter((x) => x !== filter));
    } else {
      setValue((value) => [...value, filter]);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(styles.dropdown, className, { [styles.active]: visible })}
      >
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.selection}>Filter</div>
          <div className={styles.arrow}>
            <Icon name="arrow-bottom" size="10" />
          </div>
        </div>
        <div className={styles.body}>
          {options.map((x, index) => (
            <Checkbox
              className={styles.option}
              check={styles.tick}
              content={x}
              value={value.includes(x)}
              onChange={() => handleChange(x)}
              key={index}
            />
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
