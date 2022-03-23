import React, { Component } from 'react';
import down from "../img/down.svg";
import up from "../img/up.svg";


import styles from "./Card.module.css";

class Card extends Component {

    constructor(){
      super();
      this.state ={
        counter:0,
      }}

      downhandler=()=>{
        if(this.state.counter >= 1){
          this.setState(prevstate=>({
              counter:prevstate.counter-1,
          }))

        }
      }
     uphandler=()=>
      this.setState(prevstate=>({
        counter:prevstate.counter+1,
      }))
 
      render() {
    const {image , name , cost} = this.props;
    const {counter}=this.state;
    return (
     <div className={styles.container}>
        <img src={image} alt='iphone10'/>
        <h3>{name}</h3>
        <p>{cost}</p>
        <div className={styles.counter}>

        <img src={up} alt="up" onClick={this.uphandler}/>
        <span>{counter}</span>
        <img className={this.state.counter ? "" : styles.deactive} src={down} alt="down" onClick={this.downhandler}/>
      </div>
     </div>
    );
  }
}
export default  Card;