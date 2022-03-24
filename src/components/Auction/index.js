import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./HotBid.module.sass";
import Icon from "../Icon";
import Card from "../Card";
import { Link } from "react-router-dom";

// data
import { bids } from "../../mocks/bids";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Hot = ({ classSection }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    adaptiveHeight: true,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
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
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>Live Auction</h3>
          <Link className={styles.more} to="/search01">
            Explore more
          </Link>
        </div>
      </div>
      <div className={styles.inner}>
        <Slider className="bid-slider" {...settings}>
          {bids.map((x, index) => (
            <Card key={index} className={styles.card} item={x} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hot;
