import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";
import { ethers } from "ethers";

const nav = [
  {
    url: "/search01",
    title: "Discover",
  },
  {
    url: "/faq",
    title: "How it work",
  },
  {
    url: "/item",
    title: "Create item",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");
  const [connect, setConnect] = useState(true);

  const handleSubmit = (e) => {
    alert();
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandle(result[0]);
        });
    }
    else {
      setErrorMessage("Install Metamask");
    }
  };

  const accountChangeHandle = (newAccount) => {
    // temp = newAccount;
    let newIP = newAccount.toString().slice(-4);
    if (newAccount.toString().length < 7) {
      callConnect();
    }
    else {
      setDefaultAccount(newAccount.toString().slice(0, 10) + "..." + newIP);
      getUserBalance(newAccount.toString());
    }
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangeHandle);

  window.ethereum.on("chainChanged", chainChangedHandler);

  // const [message, setMessage] = useState('')
  const callConnect = (dataConnect) => {
    setConnect(!dataConnect);
    setDefaultAccount(null);
    setUserBalance(null);
  }

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/header-footer/logo-womentech-purple.svg"
            srcDark="/images/header-footer/logo-womentech-purple.svg"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                // activeClassName={styles.active}
                to={x.url}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </nav>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form>
          <Link
            className={cn("button-small", styles.button)}
            to="/upload-variants"
          >
            Upload
          </Link>
        </div>
        <Notification className={styles.notification} />
        <Link
          className={cn("button-small", styles.button)}
          to="/upload-variants"
        >
          Upload
        </Link>
        {connect ? (
          <button className={styles.connect} onClick={() => setConnect(false)}>
            <div className={styles.nextConnect} onClick={connectWalletHandler}>
              Connect Wallet
            </div>
          </button>
        ) : (
          <User
            dataConnect={callConnect}
            defaultAccount={defaultAccount}
            userBalance={userBalance}
            className={styles.user}
            copyDefaultAccount={defaultAccount}
            setConnect={connect}
          />
        )}

        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
