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
      {
        name: "BNB",
        data: [2, 42, 10, 80, 31, 102, 108, 80, 16],
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

  return (
    <div className={cn("container", styles.section)}>
      <div className="title-page">
        <div className={styles.title}>Top NFTs</div>
      </div>
      <div id="chart" className={styles.chart}>
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
