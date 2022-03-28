import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Banner.module.sass";
import Icon from "../../../../components/Icon";

const items = [
  {
    title: "Set Up Your Wallet",
    author: "Once you’ve set up your wallet of choice connect it to OpenSeaby clicking the NFT Marketplace in the top right corner.",
    avatar: "/images/home/Frame1.svg",
  },
  {
    title: "Create Your Collection",
    author: "Click Creat and set up your collection. Add social links a description, profile & banner images, and set a secondary sales fee",
    avatar: "/images/home/Frame2.svg",
  },
  {
    title: "Add Your NFTs",
    author: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties stats",
    avatar: "/images/home/Frame3.svg",
  },
  {
    title: "List Them For Sale",
    author: "Choose between auctions fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
    avatar: "/images/home/Frame4.svg",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Banner = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={cn("section_banner-bg", styles.section_banner)}>
      {/* <div className={cn("container", styles.container)}> */}
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Slider className="collection-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <Link className={styles.avatar}>
                  <img src={x.avatar} alt="Avatar" />
                </Link>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.line}>
                  <div className={styles.user}>
                    <div className={styles.author}>
                       <span>{x.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Banner;
