import React from "react";
import 'react-bootstrap';
export default ({ close }) => (
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
                />
            </div>

            <div className="col-6">
                <img
                    srcSet="/images/content/bnb-circle.png"
                    src="/images/content/bnb-circle.png"
                    alt="Connect wallet"
                />
            </div>
        </div>
    </div>
);