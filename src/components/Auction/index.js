import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Auction.module.sass";
import Icon from "../Icon";
import Card from "../Card_auction";
import { Link } from "react-router-dom";

// data
import { bids } from "../../mocks/bids";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Auction = ({ classSection }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    adaptiveHeight: true,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    dotsClass: "slick-dots " + styles.paging,
    customPaging: (i) => (
      <div className={styles.dots}>
        <i className="fas fa-circle"></i>
      </div>
    ),
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
      <div className={styles.list}>
        <Slider className="aution-slider" {...settings}>
          {bids.map((x, index) => (
            <Card className={styles.card} item={x} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Auction;
