import React, { useState } from "react";
import styles from "./AllActivity.module.sass";
import cn from "classnames";
import Filters from "../Activity/Filters";
import Table from "../NFT/Table";
import TableAllActivity from "./TableAllActivity/TableAllActivity";
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
  const [visible, setVisible] = useState(0);

  return (
    <div className={cn("section", styles.body)}>
      <div className={cn("container", styles.container)}>
      <div className={styles.all_activity}>
            <h1 className={cn("h2", styles.title)}>Activity</h1>
            {/* <button
              className={cn(
                "button-stroke button-small mobile-hide",
                styles.button
              )}
            >
              Mark all as read
            </button> */}
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
          <div className={styles.row}>
            <Filters
              className={cn(styles.filters, { [styles.active]: visible })}
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              close={true}
            />
            <Table />
          </div>
      </div>
    </div>
  );
};

export default AllActivity;
