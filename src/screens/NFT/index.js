import React, { Component, useState } from "react";
import ReactApexChart from "react-apexcharts";
import cn from "classnames";
import styles from "./nft.module.sass";
import Table from "./Table";
import { ethers } from "ethers";

const App = () => {
    const state = {
        series: [
            {
                name: "BTC",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
            {
                name: "ETH",
                data: [2, 15, 60, 51, 47, 77, 22, 13, 20],
            },
            {
                name: "USDC",
                data: [40, 52, 60, 80, 71, 92, 88, 60, 76],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false,
                },
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
            },
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: "straight",
            },
            title: {
                text: "Product Trends by Month",
                align: "left",
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                ],
            },
        },
    };
    const [account, setAccount] = useState(null);
    const signMessage = async ({ setError }) => {
        //The text will be printed in message
        const message =
            "Welcome to WomenTech!\n\nClick to sign in and accept the WomenTech Terms.\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\n\x18Wallet address:\n" +
            account;
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
    const changData = (data) => {
        setAccount(data);
        console.log('Data: ' + data);
    }

    return (
        <div className={cn("container", styles.section)}>
            <div className="title-page">
                <div className={styles.title}>Top NFTs</div>

            </div>
            <div id="chart" className="">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="line"
                    height={450}
                />
            </div>

            <Table />
        </div>
    );
};

export default App;
