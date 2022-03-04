import React, { useState } from "react";
import styles from "./AllActivity.module.sass";
import cn from "classnames";
import Filters from "../Activity/Filters";
import TableActivity from "./TableAcivity/TableActivity";


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

  return (
    <div className={cn("section", styles.body)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.all__activity}>
          <Filters
            className={cn(styles.filters)}
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            close={true}
          />
          <TableActivity className={styles.table}/>
        </div>
      </div>
    </div>
  );
};

export default AllActivity;
