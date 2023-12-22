import Image from 'next/image';
import styles from './styles/contactus.module.css';
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: [], weight: '900' })


function ContactUs() {
    return (
        <div className={`${styles.contactUs} container`} id='contactus'>
            <h1>CONTACT US</h1>
            <h2 className={lato.className}>Speak To Our Experts</h2>
            <div className={styles.contactBox}>
                <Image src="/assets/customer.png" alt='contact us' width={2000} height={2000} />
                <div className={styles.form}>
                    <div className={styles.formsec}>
                        <label >Your Name</label>
                        <input type='text' />
                    </div>
                    <div className={styles.formsec}>
                        <label >Your Email</label>
                        <input type='email' />
                    </div>
                    <div className={styles.formsec}>
                        <label >Your Mobile</label>
                        <input type='number' />
                    </div>
                    <div className={styles.formsec}>
                        <label >Your Message</label>
                        <textarea />
                    </div>
                    <a href="#" className={styles.actionBtn} >Send Email</a>
                </div>
            </div>
            <div className={styles.box}></div>
        </div>
    )
}
export default ContactUs