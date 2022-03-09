import React, { useState } from "react";
import cn from "classnames";
import styles from "./MoreCollection.module.sass";
import Card from "../../../components/Card";
import Slider from "react-slick";

import { bids } from "../../../mocks/bids";
const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const MoreCollection = ({ className }) => {
  const [dropdown, setDropdown] = useState(false);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: (
    //   <SlickArrow>
    //     <Icon name="arrow-next" size="14" />
    //   </SlickArrow>
    // ),
    // prevArrow: (
    //   <SlickArrow>
    //     <Icon name="arrow-prev" size="14" />
    //   </SlickArrow>
    // ),
    responsive: [
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={cn(styles.more__collection, className)}>
      <div
        className={cn(styles.block__more__collection, styles.dropdown)}
        onClick={() => setDropdown(!dropdown)}
      >
        <div>
          <i className="fas fa-tag"></i>
          <span>More From This Collection</span>
        </div>
        <button className={styles.btn__drop}>
          {dropdown ? (
            <i className="fal fa-angle-up"></i>
          ) : (
            <i className="fal fa-angle-down"></i>
          )}
        </button>
      </div>
      <div
        style={dropdown ? { display: "block" } : { display: "none" }}
        className={styles.item__more__collection}
      >
        <div className={styles.inner}>
          <Slider className="bid-slider" {...settings}>
            {bids.map((x, index) => (
              <Card key={index} className={styles.card} item={x} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MoreCollection;
