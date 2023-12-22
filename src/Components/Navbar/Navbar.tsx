"use client";

import styles from './Styles/navbar.module.css';
import { Keania_One } from 'next/font/google'
const keania_One = Keania_One({ weight: "400", subsets: ['latin'] })
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={`${styles.navbar} container`} >
            <div className={`${keania_One.className} ${styles.navTitle}`}>Ideal e Designs</div>
            <ul className={`${styles.menu} ${showMenu ? styles.activeMenu : null}`}>
                <div className={`${keania_One.className} ${styles.menuTitle}`} style={{ display: "none" }}>Ideal e Designs</div>
                <li><a href="#" className={styles.active}>Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contactus">Contact us</a></li>
                <div className={styles.mobileActionBtn} style={{ display: "none" }}>
                    <a href="#contactus" >Get Started</a>
                </div>
            </ul>
            <div className={styles.actionbtn}>
                <a href="#contactus" >Get Started</a>
            </div>
            {showMenu ? <IoCloseOutline size={35} style={{ display: "none" }} className={`${styles.menuBtn} ${styles.menuBtnClose}`} onClick={() => setShowMenu(!showMenu)} />
                : <CiMenuFries size={30} style={{ display: "none" }} className={`${styles.menuBtn} `} onClick={() => setShowMenu(!showMenu)} />}

        </div>
    )
}
export default Navbar;
