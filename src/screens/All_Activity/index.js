import React, { useState } from "react";
import styles from "./AllActivity.module.sass";
import cn from "classnames";
import Filters from "../Activity/Filters";
import Table from "../NFT/Table";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [visible, setVisible] = useState(0);

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
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AllActivity;
