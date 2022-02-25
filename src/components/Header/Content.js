import React from "react";
import 'react-bootstrap';
import Web3ReactConnectionComponent from '../../Web3ReactConnectionComponent';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
window.onload = function() {
	localStorage.clear();
};
const getLibrary = (provider) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
};
export default ({ close }) => (
    <div className="modal">
        <a className="close" onClick={close}>
            &times;
        </a>
        <div className="header"> Choose Wallet </div>
        <div className="row">
            <Web3ReactProvider getLibrary={getLibrary}>
                <div className="flex space-x-3">
                    <Web3ReactConnectionComponent />
                </div>
            </Web3ReactProvider>
        </div>
    </div>
);