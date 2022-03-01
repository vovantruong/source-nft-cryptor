import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./FolowSteps_PlaceBid.module.sass";
import Icon from "../../../components/Icon";
import { ethers } from "ethers";
// import Loader from "../../../components/Loader";
// import LoaderCircle from "../../../components/LoaderCircle";

const FolowSteps = ({ className }) => {
  const [deposit, setdeposit] = useState(false);
  const [approve, setapprove] = useState(false);
  const [signature, setsignature] = useState(false);
  const [address, setAddress] = useState(null);

  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  };

  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {
        setAddress(result[0]);
      });
  }

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
      window.location.href = "/upload-details-mutiple";
    }, 1200);
  };

  return (
    <div className={cn(className, styles.steps)}>
      <div className={cn("h4", styles.title)}>Folow steps</div>
      <div className={styles.list}>
        <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            {deposit ? (
              <div className={cn(styles.icon, styles.checkGreen)}>
                <Icon className={styles.checkIcon} name="check" size="24" />
              </div>
            ) : (
              <div className={styles.icon}>
                <Icon name="upload-file" size="24" />
              </div>
            )}

            <div className={styles.details}>
              <div className={styles.info}>Deposit ETH</div>
              <div className={styles.text}>
                Send transaction with your wallet
              </div>
            </div>
          </div>
          <button
            className={
              deposit
                ? cn("button disabled", styles.button)
                : cn("button", styles.button)
            }
            onClick={() => setdeposit(true)}
          >
            {deposit ? "Done" : "Start now"}
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            {approve ? (
              <div className={cn(styles.icon, styles.checkGreen)}>
                <Icon className={styles.checkIcon} name="check" size="24" />
              </div>
            ) : (
              <div className={styles.icon}>
                <Icon name="check" size="24" />
              </div>
            )}
            <div className={styles.details}>
              <div className={styles.info}>Approve</div>
              <div className={styles.text}>Checking balance and approving</div>
            </div>
          </div>
          {approve ? (
            <button
              className={
                deposit
                  ? cn("button disabled", styles.button)
                  : cn("button ", styles.button)
              }
              onClick={() => setapprove(true)}
            >
              {deposit ? "Done" : "Start now"}
            </button>
          ) : (
            <button
              className={
                deposit
                  ? cn("button ", styles.button)
                  : cn("button disabled", styles.button)
              }
              onClick={() => setapprove(true)}
            >
              Start now
            </button>
          )}
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            {signature ? (
              <div className={cn(styles.icon, styles.checkGreen)}>
                <Icon className={styles.checkIcon} name="check" size="24" />
              </div>
            ) : (
              <div className={styles.icon}>
                <Icon name="bag" size="24" />
              </div>
            )}

            <div className={styles.details}>
              <div className={styles.info}>Signature</div>
              <div className={styles.text}>
                Create a signature to place a bit
              </div>
            </div>
          </div>
          <button
            className={
              approve
                ? cn("button ", styles.button)
                : cn("button disabled ", styles.button)
            }
            onClick={() => {
              setsignature(true);
              setTimeout(() => {
                cancel();
                handleVerify();
              }, 1000);
            }}
          >
            {signature ? "Done" : "Start now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FolowSteps;
