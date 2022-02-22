import React, { useState } from 'react';

const WalletCard = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [conButtonText, setConButtonText] = useState('connect wallet');

    const connectWalletHanble = () => {
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangeHandler(result[0])
            })
        }
        else{
            setErrorMessage('Install MetaMask')
        }
    }
    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());
    }
    const getUserBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
    }

    const chainChangeHandler = () => {
        window.location.reload();
    }
    window.ethereum.on('accountsChanged', accountChangeHandler);
    window.ethereum.on('chainChanged', chainChangeHandler)

    return(
        <div className='walletCard'>
            <h4>{"Connect Metamask"}</h4>
            <button onClick={connectWalletHanble}>{conButtonText}</button>
            <div className='accountDisplay'>
                <h3>
                    Address: {defaultAccount}
                </h3>
            </div>
            <div className='balanceDisplay'>
                <h3>Balance: {userBalance}</h3>
            </div>
        </div>
    )
}

export default WalletCard
