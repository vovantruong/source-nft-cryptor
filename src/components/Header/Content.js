import React, {useState, useEffect} from "react";
import 'react-bootstrap';
import { Col, Row } from "react-bootstrap";

const Connect = ({
    close,
    connectWalletPopup
}) => {
    // const [checkConnect, setCheckConnet] = useState(false);
    let check = false;  
    const connectCoin = () => {
        connectWalletPopup(!check);
    };
    return (
        <div className="modal">
            <a className="close" onClick={close}>
                &times;
            </a>
            <div className="header"> Choose Wallet </div>
            <div className="row">
                <div className="col-6">
                    <img
                        srcSet="/images/content/bnb-circle.png"
                        src="/images/content/bnb-circle.png"
                        alt="Connect wallet"
                        onClick={connectCoin}
                    />
                    <h4>Coin98 Wallet</h4>
                </div>

            </div>
        </div>
    );
}

export default Connect;