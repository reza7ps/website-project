import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css";

import iphonex from "../img/iphone10.jpg";
import iphone11 from "../img/iphone11.jpg";
import iphone12 from "../img/iphone12.jpg";
import iphone13 from "../img/iphone13.jpg";
class Cards extends Component {
  render() {
    return (
    <div className={styles.container}>
        <Card image={iphonex} name="Iphone X" cost="500 $"/>
        <Card image={iphone11} name="Iphone 11" cost="650 $"/>
        <Card image={iphone12} name="Iphone 12" cost="750 $"/>
        <Card image={iphone13} name="Iphone 13" cost="900 $"/>

    </div>
    );
  }
}
export default Cards;
