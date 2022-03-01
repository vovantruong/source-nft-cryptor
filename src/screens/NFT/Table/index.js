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
const Tables = () => {
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
          <Table.Row>
            <Table.HeaderCell>Collection</Table.HeaderCell>
            <Table.HeaderCell>Volume</Table.HeaderCell>
            <Table.HeaderCell>24h %</Table.HeaderCell>
            <Table.HeaderCell>7h %</Table.HeaderCell>
            <Table.HeaderCell>Floor Price</Table.HeaderCell>
            <Table.HeaderCell>Onwers</Table.HeaderCell>
            <Table.HeaderCell>Items</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
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
            <Table.Cell>22.837,23</Table.Cell>
            <Table.Cell className={styles.active}>+312.22%</Table.Cell>
            <Table.Cell className={styles.unactive}>-2.26</Table.Cell>
            <Table.Cell>1.68</Table.Cell>
            <Table.Cell>4.2K</Table.Cell>
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
            <Table.Cell>22.837,23</Table.Cell>
            <Table.Cell className={styles.unactive}>-312.22%</Table.Cell>
            <Table.Cell className={styles.active}>+2.26</Table.Cell>
            <Table.Cell>1.68</Table.Cell>
            <Table.Cell>4.2K</Table.Cell>
            <Table.Cell>5.0K</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Lindsay
                  <Header.Subheader>Entertainment</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22.837,23</Table.Cell>
            <Table.Cell className={styles.unactive}>-12.22%</Table.Cell>
            <Table.Cell className={styles.active}>+42.26</Table.Cell>
            <Table.Cell>1.68</Table.Cell>
            <Table.Cell>4.2K</Table.Cell>
            <Table.Cell>5.0K</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22.837,23</Table.Cell>
            <Table.Cell className={styles.active}>+312.22%</Table.Cell>
            <Table.Cell className={styles.unactive}>-2.26</Table.Cell>
            <Table.Cell>1.68</Table.Cell>
            <Table.Cell>4.2K</Table.Cell>
            <Table.Cell>5.0K</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22.837,23</Table.Cell>
            <Table.Cell className={styles.active}>+312.22%</Table.Cell>
            <Table.Cell className={styles.unactive}>-2.26</Table.Cell>
            <Table.Cell>1.68</Table.Cell>
            <Table.Cell>4.2K</Table.Cell>
            <Table.Cell>5.0K</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22.837,23</Table.Cell>
            <Table.Cell className={styles.active}>+312.22%</Table.Cell>
            <Table.Cell className={styles.unactive}>-2.26</Table.Cell>
            <Table.Cell>1.68</Table.Cell>
            <Table.Cell>4.2K</Table.Cell>
            <Table.Cell>5.0K</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22.837,23</Table.Cell>
            <Table.Cell className={styles.active}>+312.22%</Table.Cell>
            <Table.Cell className={styles.unactive}>-2.26</Table.Cell>
            <Table.Cell>1.68</Table.Cell>
            <Table.Cell>4.2K</Table.Cell>
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
