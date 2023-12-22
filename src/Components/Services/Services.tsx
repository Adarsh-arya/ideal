import ServicesBox from './ServicesBox/ServicesBox';
import styles from './styles/services.module.css';
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: [], weight: '900' })

function Services() {
    return (
        <div className={`${styles.services} container`} id='services'>
            <div className={styles.box}></div>
            <h1>WE PROVIDE</h1>
            <h2 className={lato.className}>Preparing for Your Success</h2>
            <div className={styles.ourServices}>
                <ServicesBox
                    image="/assets/android.png"
                    title="Mobile Development"
                    desc="We develop high-quality native and cross-platform apps keeping UX and scalability in mind."
                    style={{}}
                />
                <ServicesBox
                    image="/assets/apple.png"
                    title="IOS Development"
                    desc="We develop high-quality native and cross-platform apps keeping UX and scalability in mind."
                    style={{ width: "85px" }}
                />
                <ServicesBox
                    image="/assets/shopping.png"
                    title="IOS Development"
                    desc="We develop high-quality native and cross-platform apps keeping UX and scalability in mind."
                    style={{ width: "90px" }}
                />

                <ServicesBox
                    image="/assets/api.png"
                    title="API Development"
                    desc="We develop high-quality native and cross-platform apps keeping UX and scalability in mind."
                    style={{ marginTop: "-30px" }}
                />

                <ServicesBox
                    image={"/assets/marketing.png"}
                    title="Digital Marketing"
                    desc="We develop high-quality native and cross-platform apps keeping UX and scalability in mind."
                    style={{ width: "120px", marginTop: "-50px" }}
                />

                <ServicesBox
                    image="/assets/coding.png"
                    title="WEB Development"
                    desc="We develop high-quality native and cross-platform apps keeping UX and scalability in mind."
                    style={{ width: "90px", marginTop: "-40px" }}
                />


            </div>
            <a href="tel:+91 93155 09430" className={styles.actionBtn}>Speak To Our Experts</a>
        </div>
    )
}
export default Services