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
];

const Tables = ({ className }) => {
  useEffect(() => {
    let up__down = document.querySelectorAll(".up__down");
    for (let i = 0; i < up__down.length; i++) {
      let str = up__down[i].innerText.slice(0, 1);
      if (str == "+") {
        up__down[i].style.setProperty("color", "#08E600", "important");
      } else {
        up__down[i].style.setProperty("color", "red", "important");
      }
    }

    const bang = document.querySelectorAll(".ui.teal tbody tr");
    bang.forEach((e) => {
      e.addEventListener("click", () => {
        window.location.href = "/activity";
      });
    });
  });

  return (
    <div className={className}>
      {style}
      <Table
        selectable
        color="teal"
        padded="very"
        striped="true"
        celled
        className={cn(styles.body)}
        style={{ marginTop: "50px" }}
      >
        <Table.Header>
          <Table.Row className={styles.row__header}>
            <Table.HeaderCell>Collection</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>
              Volume
            </Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>24h %</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>7h %</Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>
              Floor Price
            </Table.HeaderCell>
            <Table.HeaderCell className={styles.mobile}>
              Onwers
            </Table.HeaderCell>
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
                    <div>
                      <Header.Content>
                        {i.name}
                        <Header.Subheader className={styles.sub}>
                          {i.sub}
                        </Header.Subheader>
                      </Header.Content>
                    </div>
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
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default Tables;
