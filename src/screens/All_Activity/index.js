import React, { useState } from "react";
import styles from "./AllActivity.module.sass";
import cn from "classnames";
import Filters from "../Activity/Filters";
import TableActivity from "./TableAcivity/TableActivity";
import Icon from "../../components/Icon";


const filters = [
  "Sales",
  "Listings",
  "Bids",
  "Burns",
  "Followings",
  "Likes",
  "Purchase",
  "Transfers",
];

const AllActivity = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [visible, setVisible] = useState();

  return (
    <div className={cn("section", styles.body)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h1 className={cn("h2", styles.title)}>All Activity</h1>
          <button
            className={cn(
              "button-circle-stroke button-small tablet-show",
              styles.toggle,
              { [styles.active]: visible }
            )}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="filter" size="24" />
            <Icon name="close" size="14" />
          </button>
        </div>
        <div className={styles.all__activity}>
          <Filters
            className={cn(styles.filters)}
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            close={true}
          />
          <TableActivity className={styles.table} />
        </div>
      </div>
    </div>
  );
};

export default AllActivity;
