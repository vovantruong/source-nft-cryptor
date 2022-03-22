import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../../components/Icon";

const items = [
  {
    title: "Set Up Your Wallet",
    author: "Join Stacks community now to get free updates and also alot of freebies are waiting for you or Contact Support",
    avatar: "/images/home/avatar-colection-01.svg",
  },
  {
    title: "Create Your Collection",
    author: "Join Stacks community now to get free updates and also alot of freebies are waiting for you or Contact Support",
    avatar: "/images/home/avatar-colection-01.svg",
  },
  {
    title: "Add Your NFTs",
    author: "Join Stacks community now to get free updates and also alot of freebies are waiting for you or Contact Support",
    avatar: "/images/home/avatar-colection-01.svg",
  },
  {
    title: "List Them For Sale",
    author: "Join Stacks community now to get free updates and also alot of freebies are waiting for you or Contact Support",
    avatar: "/images/home/avatar-colection-01.svg",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    // slidesToScroll: 1,
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
    // responsive: [
    //   {
    //     breakpoint: 1023,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className={cn("section_banner-bg", styles.section_banner)}>
      {/* <div className={cn("container", styles.container)}> */}
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Slider className="collection-slider" {...settings}>
            {items.map((x, index) => (
              <Link className={styles.item} to="/profile" key={index}>
                <div className={styles.avatar}>
                  <img src={x.avatar} alt="Avatar" />
                </div>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.line}>
                  <div className={styles.user}>
                    <div className={styles.author}>
                      By <span>{x.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Collections;
