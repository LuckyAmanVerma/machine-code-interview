import React, { useState } from 'react';
import { ICarouselProps } from '@/Interfaces/carousel';
import styles from "./styles/index.module.css";

const Carousel = ({ children }: ICarouselProps) => {
    const [page, setPage] = useState(0);
    const items = React.Children.toArray(children);
    return <section style={{ marginTop: "var(--space-xs)" }} aria-label="Page Carousel">
        <ul className={styles.buttonWrapper}>
            {items.map((component, index) => (
                <li key={index}>
                    <button
                        title={'Page ' + (index + 1).toString()}
                        id={index.toString()}
                        className={`${styles.carousel_btn} ${index === page ? styles.active : ""}`}
                        onClick={() => setPage(index)}
                    >
                        <span className={styles.buttonContent}>
                            {index + 1}
                        </span>
                    </button>
                </li>
            ))}
        </ul>
        <ul >{
            items.map((component, index) =>
                <li
                    aria-label={`slide ${index} is ${index === page ? 'active' : "not-active"} `}
                    className={`${styles.slider} ${index === page ? styles.active : ""}`}
                    key={index}>{component}</li>)
        }</ul>
    </section>
}

export default Carousel;
