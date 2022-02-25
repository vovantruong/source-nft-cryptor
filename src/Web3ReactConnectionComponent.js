import { useWeb3React } from '@web3-react/core';
import { walletconnect, resetWalletConnector, walletlink } from './Helpers/connectors';
import { getContract } from './Helpers/contract';
import React from 'react';

const Web3ReactConnectionComponent = () => {
	//connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React(); 
	//web3react walletconnect
	const connectWalletConnectSimple = async () => {
		try {
			resetWalletConnector(walletconnect);
			await web3reactContext.activate(walletconnect);
			console.log("connected");
		} catch (ex) {
			console.log(ex);
		}
	};

	//web3react coinbase
	const connectCoinbaseSimple = async () => {
		try {
			await web3reactContext.activate(walletlink);
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<div className="flex flex-col space-y-7 items-start pt-10 w-1/2 border-2 border-yellow-300">		
			<div className="flex space-x-3">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={connectWalletConnectSimple}
				>
					Connect walletconnect
				</button>
			</div>
			<div className="flex space-x-3">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={connectCoinbaseSimple}
				>
					Connect coinbase
				</button>
			</div>
		</div>
	);
};
export default Web3ReactConnectionComponent;
