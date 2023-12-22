"use client"
import Image from 'next/image';
import styles from './styles/bestimonialbox.module.css';
import React, { useState } from 'react';
import Rating from 'react-rating';

function TestimonialBox() {
    const [rating, setRating] = useState<number>(5); // Specify the type for rating state

    return (
        <div className={styles.testimonialBox}>
            <div className={styles.userBox}>
                <div className={styles.imageWrapper}>
                    <Image alt='test1' src="/assets/me.webp" width={120} height={120} />
                </div>
                <div className={styles.info}>
                    <h4>Sourav Bapari</h4>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<span>☆</span>}
                        fullSymbol={<span>★</span>}
                        onChange={(newRating: number) => {
                            setRating(newRating);
                        }}
                    />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt repellendus earum, doloribus vel deserunt quam repudiandae accusamus odit iure id consequuntur ex neque necessitatibus consectetur mollitia. Natus, nemo architecto!</p>
        </div>
    );
}

export default TestimonialBox;
