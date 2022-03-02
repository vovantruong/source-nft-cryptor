import React, { Component, useEffect } from "react";
import { Header, Image, Icon, Table, Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Table.module.sass";
const style = (
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
  />
);

const list = [
  {
    collection: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Lena",
        sub: "Human Resources",
      },
    ],
    volumn: "22.837,23",
    twenty: "+312.22%",
    seven: "-2.26%",
    floor: "1.68",
    onwers: "4.2K",
    item: "5.0K",
  },
  {
    collection: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/matthew.png",
        name: "Matthew",
        sub: "Fabric Design",
      },
    ],
    volumn: "22.837,23",
    twenty: "-2.22%",
    seven: "+103.26%",
    floor: "1.68",
    onwers: "4.2K",
    item: "5.0K",
  },
  {
    collection: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
        name: "Lindsay",
        sub: "Fabric Design",
      },
    ],
    volumn: "22.837,23",
    twenty: "+212.22%",
    seven: "-3.26%",
    floor: "1.68",
    onwers: "4.2K",
    item: "5.0K",
  },
  {
    collection: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/mark.png",
        name: "Mark",
        sub: "Fabric Design",
      },
    ],
    volumn: "22.837,23",
    twenty: "-9.22%",
    seven: "+30.26%",
    floor: "1.68",
    onwers: "4.2K",
    item: "5.0K",
  },
  {
    collection: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/mark.png",
        name: "Mark",
        sub: "Fabric Design",
      },
    ],
    volumn: "22.837,23",
    twenty: "+9.22%",
    seven: "-30.26%",
    floor: "1.68",
    onwers: "4.2K",
    item: "5.0K",
  },
  {
    collection: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/matthew.png",
        name: "Matthew",
        sub: "Fabric Design",
      },
    ],
    volumn: "22.837,23",
    twenty: "-2.22%",
    seven: "+103.26%",
    floor: "1.68",
    onwers: "4.2K",
    item: "5.0K",
  },
  {
    collection: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
        name: "Lindsay",
        sub: "Fabric Design",
      },
    ],
    volumn: "22.837,23",
    twenty: "+212.22%",
    seven: "-3.26%",
    floor: "1.68",
    onwers: "4.2K",
    item: "5.0K",
  },
];

const Tables = () => {
  useEffect(() => {
    let up__down = document.querySelectorAll(".up__down");
    for (let i = 0; i < up__down.length; i++) {
      let str = up__down[i].innerHTML.slice(0, 1);
      if (str == "+") {
        up__down[i].style.setProperty("color", "#08E600", "important");
      } else {
        up__down[i].style.setProperty("color", "red", "important");
      }
    }
  }, []);
  useEffect(() => {
    const bang = document.querySelectorAll('.ui.teal tbody tr');
    bang.forEach((e)=>{
      e.addEventListener('click', ()=>{
        window.location.href = "/activity";
      })
    })
    
  })

  return (
    <div>
      <Table
        selectable
        color="teal"
        padded="very"
        striped="true"
        celled
        className={styles.body}
        style={{ marginTop: "50px" }}
      >
        <Table.Header>
          <Table.Row className={styles.row__header}>
            <Table.HeaderCell>Collection</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>Volume</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>24h %</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>7h %</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>Floor Price</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>Onwers</Table.HeaderCell>
            <Table.HeaderCell>Items</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className={styles.table__body}>
          {list.map((e, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                {e.collection.map((i, number) => (
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
              <Table.Cell>{e.volumn}</Table.Cell>
              <Table.Cell className={cn("up__down")}>{e.twenty}</Table.Cell>
              <Table.Cell className={cn("up__down")}>{e.seven}</Table.Cell>
              <Table.Cell>{e.floor}</Table.Cell>
              <Table.Cell>{e.onwers}</Table.Cell>
              <Table.Cell>{e.item}</Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Lena
                  <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell className={styles.mobile}>22.837,23</Table.Cell>
            <Table.Cell className={styles.active}>+312.22%</Table.Cell>
            <Table.Cell className={styles.unactive}>-2.26</Table.Cell>
            <Table.Cell className={styles.mobile}>1.68</Table.Cell>
            <Table.Cell className={styles.mobile}>4.2K</Table.Cell>
            <Table.Cell>5.0K</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Matthew
                  <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell className={styles.mobile}>22.837,23</Table.Cell>
            <Table.Cell className={styles.unactive}>-312.22%</Table.Cell>
            <Table.Cell className={styles.active}>+2.26</Table.Cell>
            <Table.Cell className={styles.mobile}>1.68</Table.Cell>
            <Table.Cell className={styles.mobile}>4.2K</Table.Cell>
            <Table.Cell>5.0K</Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
    </div>
  );
};

export default () => (
  <div>
    {style}
    <Tables />
  </div>
);
