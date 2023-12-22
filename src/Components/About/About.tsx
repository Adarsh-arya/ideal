import Image from 'next/image';
import styles from './styles/about.module.css';
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: [], weight: '900' })

function About() {
    return (
        <div className={`${styles.about} container`} id='aboutus'>
            <div className={styles.imageSec}>
                <Image alt='About Image' src="/assets/service.png" width={3000} height={3000} />
            </div>
            <div className={styles.contentSec}>
                <h1 className={lato.className}>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <br />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <a href="#" className={styles.actionBtn} >Read More</a>
            </div>
        </div>
    )
}

export default About;