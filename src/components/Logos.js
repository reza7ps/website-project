import React from 'react';
import style from "./Logos.module.css";
import apple from "../img/Apple.jpg"
import samsung from "../img/samsung.jpg"
import xiaomi from "../img/Xiaomi.jpg"

const Logos = () => {
    return (
        <div className={style.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={apple} alt="apple logo"/>
                <img src={samsung} alt="samsung logo"/>
                <img src={xiaomi} alt="xiaomi logo"/>
            </div>
        </div>
    );
};

export default Logos;