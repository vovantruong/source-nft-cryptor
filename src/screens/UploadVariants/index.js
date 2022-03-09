import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./UploadVariants.module.sass";
import Control from "../../components/Control";
import { ethers } from "ethers";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Upload Item",
  },
];

const items = [
  {
    url: "/upload-details",
    buttonText: "Create Single",
    image: "/images/UploadItem/single.svg",
    image2x: "/images/UploadItem/single.svg",
  },
  {
    url: "/upload-details-mutiple",
    buttonText: "Create Multiple",
    image: "/images/UploadItem/mutiple.svg",
    image2x: "/images/UploadItem/mutiple.svg",
  },
];

const Upload = () => {
  const [signature, setsignature] = useState(false);
  const [address, setAddress] = useState(null);
  //Sign Message metamask
const signMessage = async ({ setError }) => {
  const message =
    "Welcome to WomenTech!\n\n" +
    "Click to sign in and accept the WomenTech Terms.\n\n" +
    "This request will not trigger a blockchain transaction or cost any gas fees.\n\n" +
    "Your authentication status will reset after 24 hours.\n\n\x18Wallet address:\n" +
    address;

  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address,
    };
  } catch (error) {
    setError(error.message);
  }
};

const [signatures, setSignatures] = useState([]);
const [error, setError] = useState();

const handleVerify = async () => {
  const sig = await signMessage({
    setError,
  });
  setSignatures([...signatures, sig]);
  setTimeout(() => {
    window.location.href = "/upload-details";
  }, 1000);
};

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Upload item</h1>
            <div className={styles.info}>
              Choose <span>“Single”</span> if you want your collectible to be
              one of a kind or <span>“Multiple”</span> if you want to sell one
              collectible multiple times
            </div>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.preview}>
                  <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Upload" />
                </div>
                <Link to="/upload-variants" className={cn("button-stroke", styles.button)} onClick={() => {
              setsignature(true);
              setTimeout(() => {
                handleVerify();
              }, 1000);
            }}>
                  {x.buttonText}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            We do not own your private keys and cannot access your funds without
            your confirmation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
