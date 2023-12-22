import TestimonialBox from './TestimonialBox/TestimonialBox';
import styles from './styles/testimonials.module.css';
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: [], weight: '900' })

function Testimonials() {
    return (
        <div className={`${styles.testimonials} container`} id='testimonials'>
            <h1>Testimonials</h1>
            <h2 className={lato.className}>Know What Our Clients Say About</h2>
            <div className={styles.testimonialBox}>
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
            </div>
        </div>
    )
}

export default Testimonials;