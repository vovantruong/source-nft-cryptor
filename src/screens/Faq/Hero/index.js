import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import DropdownFaq from "../DropdownFaq";
import Icon from "../../../components/Icon";
import Item from "./Item";

const Hero = () => {
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch("https://admin.nftmarketplace.vn/api/v1/faq/category")
      .then((res) => res.json())
      .then((e) => {
        if (mounted) {
          setCategories(e.data);
        }
      });
    return () => (mounted = false);
  }, []);

  const [direction, setDirection] = useState("General");
  const [categoryFaqID, setCategoryFaqID] = useState(5);

  useEffect(() => {
    let mounted = true;
    fetch(
      `https://admin.nftmarketplace.vn/api/v1/faq?category_faq_id=${categoryFaqID}`
    )
      .then((res) => res.json())
      .then((e) => {
        if (mounted) {
          setFaqs(e.data);
        }
      });
    return () => (mounted = false);
  }, [categoryFaqID]);
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.stage}>learn how to get started</div>
          <h1 className={cn("h2", styles.title)}>Frequently asked questions</h1>
          <div className={styles.info}>
            Join Stacks community now to get free updates and also alot of
            freebies are waiting for you or{" "}
            <a href="/#" rel="noopener noreferrer">
              Contact Support
            </a>
          </div>
          <DropdownFaq
            className={cn("mobile-show", styles.dropdown)}
            options={categories}
            id={categoryFaqID}
            setID={setCategoryFaqID}
            title={direction}
            setTitle={setDirection}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.nav}>
              {categories.map((x, index) => (
                <div
                  className={cn(styles.link, {
                    [styles.active]: x.id === categoryFaqID,
                  })}
                  onClick={() => {
                    setDirection(x.title);
                    setCategoryFaqID(x.id);
                  }}
                  key={index}
                >
                  <Icon name={x.icon} size="16" />
                  <span>{x.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            {faqs != undefined
              ? faqs.map((x, index) => (
                  <Item
                    className={styles.item}
                    item={x.title}
                    content={x.content}
                    key={index}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
