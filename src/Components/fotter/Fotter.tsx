import styles from './styles/Fotter.module.css';
import { Keania_One } from 'next/font/google'
const keania_One = Keania_One({ weight: "400", subsets: ['latin'] })
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";


function Fotter() {
    return (
        <div className={`${styles.fotter}`}>
            <div className="container">
                <div className={`${keania_One.className} ${styles.fotterTitle}`}>Ideal e Designs</div>
                <ul className={styles.quicklink}>
                    <li>
                        <a href="#">Life-Time Support</a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#">Disclaimer & Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
                <div className={styles.socailIcons}>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><RiInstagramFill /></a>
                    <a href="#"><FaSquareXTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
                <div className={styles.fotterLinks}>
                    <ul>
                        <li className={styles.title}>Mobile Development</li>
                        <li><a href="#">React Native Development</a></li>
                        <li><a href="#">Flutter App Development</a></li>
                        <li><a href="#">Native Android Development</a></li>
                        <li><a href="#">Native iOS Development</a></li>
                    </ul>
                    <ul>
                        <li className={styles.title}>Web Development</li>
                        <li><a href="#">React Development</a></li>
                        <li><a href="#">Node.js Development</a></li>
                        <li><a href="#">PHP Development</a></li>
                        <li><a href="#">Python Development</a></li>
                    </ul>
                    <ul>
                        <li className={styles.title}>Ecommerce Development</li>
                        <li><a href="#">Magento Development</a></li>
                        <li><a href="#">WooCommerce Development</a></li>
                        <li><a href="#">Shopify Development</a></li>
                    </ul>
                    <ul>
                        <li className={styles.title}>Our Company</li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#services">Why Choose Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <p className={styles.fotterText}>© 2023 Ideal e Designs Technologies Pvt Ltd, All Rights Reserved. </p>
            </div>
        </div>
    )
}
export default Fotter;