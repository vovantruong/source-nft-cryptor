import React, { useState } from "react";
import styles from "./SelectWallet.module.sass";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { Web3Provider } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/ethereum-provider";

const menu = [
  {
    id: 1,
    title: "MetaMask",
    img: "images/metamask.png",
  },
  {
    id: 2,
    title: "Coin98",
    img: "images/coin98.png",
  },
  {
    id: 3,
    title: "Wallet Connect",
    img: "images/wallet-connect.png",
  },
  {
    id: 4,
    title: "More",
    img: "images/three-doc.png",
  },
];

const SelectWallet = ({ className, moreWallet }) => {
  const [visible, setVisible] = useState(false);
  const [web3Library, setWeb3Library] = React.useState();
  const [web3Account, setWeb3Account] = React.useState();
  const [walletlinkProvider, setWalletlinkProvider] = React.useState();
  const [walletConnectProvider, setWalletConnectProvider] = React.useState();

  //vanilla walletconnect
  const connectWaletConnect = async () => {
    try {
      const RPC_URLS = {
        1: "https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
        4: "https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
      };
      const provider = new WalletConnectProvider({
        rpc: {
          1: RPC_URLS[1],
          4: RPC_URLS[4],
        },
        qrcode: true,
        pollingInterval: 15000,
      });
      setWalletConnectProvider(provider);
      const accounts = await provider.enable();
      const account = accounts[0];

      const library = new Web3Provider(provider, "any");
      
      setWeb3Library(library);
      setWeb3Account(account);
      console.log("connected");
    } catch (ex) {
      console.log(ex);
    }
  };

  //Handing more Wallet
  const MoreWallet = (id) => {
    if (id == 1) {
      //handing connect metamask
      moreWallet();
    } else if (id == 2) {
      //handing connect coin98

    } else if (id == 3) {
      //handing connect walletconnect
      connectWaletConnect();
    }else{
      alert("The functionality is evolving. Please try again later")
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.wallet}>Connect Wallet</div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.top}>
              <p>Connect Wallet</p>
            </div>
            <div className={styles.wrap}>
              {menu.map((e) => (
                <div
                  key={e.id}
                  className={styles.all_wallet}
                  onClick={() =>
                    // e.id == e.id ? MoreWallet(e.id) : MoreWallet(e.id)
                    MoreWallet(e.id)
                  }
                >
                  <img src={e.img} />
                  <p className={styles.name}>{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default SelectWallet;
