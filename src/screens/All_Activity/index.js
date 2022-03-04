import React, { useState } from "react";
import styles from "./AllActivity.module.sass";
import cn from "classnames";
import Filters from "../Activity/Filters";
import Table from "../NFT/Table";
import TableAllActivity from "./TableAllActivity/TableAllActivity";

// const filters = [
//   "Sales",
//   "Listings",
//   "Bids",
//   "Burns",
//   "Followings",
//   "Likes",
//   "Purchase",
//   "Transfers",
// ];

// const AllActivity = () => {
//   // const [selectedFilters, setSelectedFilters] = useState([]);

//   return (
//     <div className={cn("section", styles.body)}>
//       <div className={cn("container", styles.container)}>
//       <h1 className={cn("h2", styles.title)}>All Activity</h1>
//         <div className={styles.all__activity}>
//           <Filters
//             className={cn(styles.filters)}
//             filters={filters}
//             selectedFilters={selectedFilters}
//             setSelectedFilters={setSelectedFilters}
//             close={true}
//           />
//           <Table className={styles.table}/>
//         </div>
//       </div>
//     </div>
//   );
// };

const AllActivity = () => {

  return (
    <div className={cn("section", styles.body)}>
     
    </div>
  );
};

export default AllActivity;
