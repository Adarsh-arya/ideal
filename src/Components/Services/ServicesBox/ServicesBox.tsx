import React from 'react';
import Image from 'next/image';
import styles from './styles/servicesbox.module.css';

interface ServicesBoxProps {
    title: string;
    image: string;
    desc: string;
    style?: React.CSSProperties;
}

function ServicesBox({ title, image, desc, style }: ServicesBoxProps) {
    return (
        <div className={styles.servicesbox}>
            <Image alt='android' src={image} width={200} height={200} style={style} />
            <div className={styles.content}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className={styles.action}>
                <a href="#">Learn More</a>
            </div>
        </div>
    );
}

export default ServicesBox;
