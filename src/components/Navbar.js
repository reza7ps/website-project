import React from 'react';

import styles from "../components/Navbar.module.css";
import logo from "../img/logo1.jpeg";

const Navbar = () => {
    return (
        
        <header className={styles.header}>
            <div className={styles.listContainer}>
              <ul className={styles.List}>
                <li>Home Page</li>    
                <li>Product</li>   
                <li>About us</li>     
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt='logo' />
            </div>
        </header>
    );
};

export default Navbar;