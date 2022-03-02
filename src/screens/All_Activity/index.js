import React, { useState, useEffect } from 'react'
import { Header, Image, Icon, Table, Menu } from "semantic-ui-react";
import styles from './AllActivity.module.sass'
import cn from 'classnames'
import Filter from '../Activity/Filters'


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
const list = [
  {
    items: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Lena",
        sub: "Human Resources",
      },
    ],
    price: "---",
    from: "NullAddress",
    to: "-2.26%",
    time: "25s ago",
  },
  {
    items: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/matthew.png",
        name: "Matthew",
        sub: "Fabric Design",
      },
    ],
    price: "---",
    from: "NullAddress",
    to: "+103.26%",
    time: "25s ago",
  },
  {
    items: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
        name: "Lindsay",
        sub: "Fabric Design",
      },
    ],
    price: "---",
    from: "NullAddress",
    to: "-3.26%",
    time: "25s ago",
  },
  {
    items: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/mark.png",
        name: "Mark",
        sub: "Fabric Design",
      },
    ],
    price: "---",
    from: "NullAddress",
    to: "+30.26%",
    time: "25s ago",
  },
  {
    items: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/mark.png",
        name: "Mark",
        sub: "Fabric Design",
      },
    ],
    price: "---",
    from: "NullAddress",
    to: "-30.26%",
    time: "25s ago",
  },
  {
    items: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/matthew.png",
        name: "Matthew",
        sub: "Fabric Design",
      },
    ],
    price: "---",
    from: "NullAddress",
    to: "+103.26%",
    time: "25s ago",
  },
  {
    items: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
        name: "Lindsay",
        sub: "Fabric Design",
      },
    ],
    price: "---",
    from: "NullAddress",
    to: "-3.26%",
    time: "25s ago",
  },
];
const AllActivity = () => {
  useEffect(() => {
    let up__down = document.querySelectorAll(".up__down");
    for (let i = 0; i < up__down.length; i++) {
      let str = up__down[i].innerHTML.slice(0, 1);
      if (str == "+") {
        up__down[i].style.setProperty("color", "blue", "important");
      } else {
        up__down[i].style.setProperty("color", "blue", "important");
      }
    }
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [visible, setVisible] = useState(0);
  const zoIn = () => {
    document.querySelector('.filters').classList.add('zoIn');
  }
  return (
    <div className={styles.page}>
      <div className={cn("section-pt80", styles.body)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.row}>
            <button onClick={zoIn}>Click</button>
            <Filter
              className={cn(styles.filters, { [styles.active]: visible })}
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            ></Filter>
            <div className={styles.parent} style={{flex: 3}}>
              <Table
                selectable
                color="purple"
                padded="very"
                striped="true"
                celled
                className={styles.table}
                style={{width:'-webkit-fill-available' }}
              >
                <Table.Header>
                  <Table.Row className={styles.row__header}>
                    <Table.HeaderCell>Items</Table.HeaderCell>
                    <Table.HeaderCell className={styles.mobile}>Price</Table.HeaderCell>
                    <Table.HeaderCell className={styles.mobile}>From</Table.HeaderCell>
                    <Table.HeaderCell className={styles.mobile}>To</Table.HeaderCell>
                    <Table.HeaderCell className={styles.mobile}>Time</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body className={styles.table__body}>
                  {list.map((e, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>
                        {e.items.map((i, number) => (
                          <Header key={number} as="h4" image>
                            <Image src={i.img} rounded size="mini" />
                            <Header.Content>
                              {i.name}
                              <Header.Subheader className={styles.sub}>
                                {i.sub}
                              </Header.Subheader>
                            </Header.Content>
                          </Header>
                        ))}
                      </Table.Cell>
                      <Table.Cell>{e.price}</Table.Cell>
                      <Table.Cell className={cn("up__down")}>{e.from}</Table.Cell>
                      <Table.Cell className={cn("up__down")}>{e.to}</Table.Cell>
                      <Table.Cell>{e.time}</Table.Cell>
                    </Table.Row>
                  ))}

                </Table.Body>
              </Table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AllActivity;