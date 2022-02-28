import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Wallet.module.css";

const items = [
    {
        title: "My profile",
        icon: "user",
        url: "/profile",
    },
    {
        title: "My items",
        icon: "image",
        url: "/item",
    },
    {
        title: "Dark theme",
        icon: "bulb",
    },
    {
        title: "Disconnect",
        icon: "exit",
        check: "disconnect",
    },
];

const Wallet = () => {

    return (
        <ul className="nav__submenu">
            <li className="nav__submenu-item ">
                <a>Our Company</a>
            </li>
            <li className="nav__submenu-item ">
                <a>Our Team</a>
            </li>
            <li className="nav__submenu-item ">
                <a>Our Portfolio</a>
            </li>
        </ul>
    );
};

export default Wallet;
