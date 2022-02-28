import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import cn from "classnames";
import styles from "./Nft.module.sass";
import Table from './Table';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Hong be oi",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                },
                {
                    name: "Phai lam sao",
                    data: [2, 15, 60, 51, 47, 77, 22, 13, 20]
                },
                {
                    name: "Be Le Van Dat",
                    data: [40, 52, 60, 80, 71, 92, 88, 60, 76]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            },


        };
    }
    render() {
        return (

            <div className={cn('container', styles.section)}>
                <div className="title-page">
                    <div className={styles.title}>Top NFTs</div>
                </div>
                <div id="chart" className="">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                </div>

                <Table />
            </div>
        )
    }
}

export default App;
