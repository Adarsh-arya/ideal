import styles from './styles/header.module.css';
import Image from 'next/image';
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: [], weight: '900' })
function Header() {
    return (
        <div className={`${styles.header} container`}>
            <div className={styles.boxShadow}></div>
            <div className={styles.headerSec}>
                <div className={styles.content}>
                    <div className={`${styles.title} ${lato.className}`}>
                        <h1>Grow</h1>
                        <h4>Your Business</h4>
                        <h3>With</h3>
                        <h1>Ideal e Designs</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <a href="#contactus" className={styles.actionBtn} >Get Started</a>
                    <a href='tel:+91 93155 09430' className={styles.callNowBtn}>Call Now - +91 93155 09430</a>
                </div>
                <div className={styles.sideImage}>
                    <Image alt='headerImage' src="/assets/glasses.png" width={1200} height={1200} />
                </div>
            </div>
        </div>
    )
}
export default Header;