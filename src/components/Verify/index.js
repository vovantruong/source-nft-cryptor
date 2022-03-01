import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
const Verify = ({
    defaultAccount,
    copyDefaultAccount,
    parentCallback
}) => {
    const signMessage = async ({ setError }) => {
        //The text will be printed in message
        const message =
            "Welcome to WomenTech!\n\nClick to sign in and accept the WomenTech Terms.\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\n\x18Wallet address:\n" +
            copyDefaultAccount;
        try {
            console.log({ message });
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
        } catch (err) {
            setError(err.message);
        }
    };
    const [signatures, setSignatures] = useState([]);
    const [error, setError] = useState();
    const handleVerify = async () => {
        const sig = await signMessage({
            setError,
            // message: data.get("message")
        });
        setSignatures([...signatures, sig]);
    };
    useEffect(() => {
        if (copyDefaultAccount != null) {
            parentCallback = copyDefaultAccount
        }
    })
    return (
        <>

        </>
    )
}

export default Verify;