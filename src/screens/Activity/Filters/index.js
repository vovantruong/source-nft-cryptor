import React, { useState } from "react";
import cn from "classnames";
import styles from "./Filters.module.sass";
import Checkbox from "../../../components/Checkbox";

const Filters = ({
  className,
  filters,
  selectedFilters,
  setSelectedFilters,
  close,
}) => {
  const [visible, setVisible] = useState(false);

  const handleChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== filter));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, filter]);
    }
  };


  return (
    <div
      className={cn(styles.filters, className, { [styles.active]: visible })}
    >
      <div className={styles.info}>
        <span>Filters</span>
        {close ? (
          <div
            onClick={() => {
              setVisible(!visible);
            }}
            className={styles.arrow}
          >
            {visible ? (
              <i className="fas fa-chevron-double-right"></i>
            ) : (
              <i className="fas fa-chevron-double-left"></i>
            )}
          </div>
        ) : null}
      </div>

      <div className={styles.group}>
        {filters.map((x, index) => (
          <Checkbox
            className={styles.checkbox}
            check={styles.tick}
            content={x}
            value={selectedFilters.includes(x)}
            onChange={() => handleChange(x)}
            key={index}
          />
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn("button-stroke button-small", styles.button)}>
          Select all
        </button>
        <button className={cn("button-stroke button-small", styles.button)}>
          Unslect all
        </button>
      </div>
    </div>
  );
};

export default Filters;
