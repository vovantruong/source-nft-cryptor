import React from "react";
import { Header, Image, Icon, Table, Menu } from "semantic-ui-react";
import cn from "classnames";
import {Link} from 'react-router-dom'
import styles from "./TableActive.module.sass";
const style = (
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
  />
);

const listHeader = ["", "Item", "Price", "Quantity", "From", "To", "Time"];

const listItem = [
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
  {
    item: [
      {
        img: "https://react.semantic-ui.com/images/avatar/small/lena.png",
        name: "Deadfrenz Collection",
        nickname: " Deadfrenz Collection #1234",
      },
    ],
    price: [
      {
        imgBlock:
          "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
        coin: "0.143",
        currency: "$472,01",
      },
    ],
    quantity: "1",
    from: "DB9CS7D",
    to: "---",
    time: "10 second ago",
  },
];

const TableActivity = ({ className }) => {
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
        <Table.Header className={styles.table__header}>
          <Table.Row className={styles.row__header}>
            {listHeader.map((header) => (
              <Table.HeaderCell>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body className={styles.table__body} >
          {listItem.map((e, index) => (
            <Table.Row key={index}>
              <Table.Cell className={styles.sale}><i className="fas fa-hand-paper"></i> Offer</Table.Cell>
              <Table.Cell>
                {e.item.map((i, number) => (
                  <Header className={styles.item} key={number} as="h4" image>
                    <Image src={i.img} rounded size="mini" />
                    <Header.Content>
                      {i.name}
                      <Header.Subheader className={styles.sub}>
                        {i.nickname}
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                ))}
              </Table.Cell>
              <Table.Cell>
                {e.price.map((x, number) => (
                  <div className={styles.price}>
                    <div className={styles.coin}>
                      <Image src={x.imgBlock} rounded size="mini" />
                      {x.coin}
                    </div>
                    <p>{x.currency}</p>
                  </div>
                ))}
              </Table.Cell>
              <Table.Cell>{e.quantity}</Table.Cell>
              <Table.Cell><Link to="">{e.from}</Link></Table.Cell>
              <Table.Cell>{e.to}</Table.Cell>
              <Table.Cell>{e.time}</Table.Cell>
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

export default TableActivity;
