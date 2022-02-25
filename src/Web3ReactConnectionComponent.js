// import { getContract } from './Helpers/contract';
import { Web3Provider } from '@ethersproject/providers';
import React from 'react';
import WalletConnectProvider from '@walletconnect/ethereum-provider';
// import WalletLink from 'walletlink';

const Web3ReactConnectionComponent = () => {
	const [web3Library, setWeb3Library] = React.useState();
	const [web3Account, setWeb3Account] = React.useState();
	const [walletlinkProvider, setWalletlinkProvider] = React.useState();
	const [walletConnectProvider, setWalletConnectProvider] = React.useState();
	const [connect, setConnect] = React.useState(true);
	//vanilla walletconnect
	const connectWaletConnect = async () => {
		try {
			const RPC_URLS = {
				1: 'https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
				4: 'https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4'
			};
			const provider = new WalletConnectProvider({
				rpc: {
					1: RPC_URLS[1],
					4: RPC_URLS[4]
				},
				qrcode: true,
				pollingInterval: 15000
			});
			setWalletConnectProvider(provider);
			const accounts = await provider.enable();
			const account = accounts[0];

			const library = new Web3Provider(provider, 'any');

			console.log('library');
			console.log(library);
			setWeb3Library(library);
			setWeb3Account(account);
			console.log("connected");
		} catch (ex) {
			console.log(ex);
		}
	};
	return (
		<div className="flex flex-col space-y-7 items-start pt-10 w-1/2 border-2 border-yellow-300">
			{/* {web3Account ? <p>{web3Account}</p> : <p>Not Connected</p>} */}
			<div className="flex space-x-3">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={connectWaletConnect}
				>
					<img
						srcSet="/images/content/bnb-circle.png"
						src="/images/content/bnb-circle.png"
						alt="Connect wallet"
					/>
					Connect walletconnect
				</button>
			</div>
			<div className="connectMetamask">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={setConnect}
				>
					<img
						srcSet="/images/content/bnb-circle.png"
						src="/images/content/bnb-circle.png"
						alt="Connect wallet"
					/>
					Connect Metamask
				</button>
			</div>
		</div>
	);
};
export default Web3ReactConnectionComponent;
