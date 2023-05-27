"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./about.module.css";

const SliderAbout = ({ data, baseUrl }) => {
  const urls = [];

  const [currentSlide, setCurrentSlide] = useState(0);

  data.forEach((e) => {
    urls.push(e.attributes.url);
  });

  const nextSlideHandler = () => {
    currentSlide + 1 >= urls.length
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  return (
    <>
      <div className={styles.slideContainer}>
        <Image
          className={styles.img}
          alt=""
          width={700}
          height={500}
          src={`${baseUrl}${urls[currentSlide]}`}
        />
        <button className={styles.buttonImgNext} onClick={nextSlideHandler}>Следущая фотография</button>
      </div>
    </>
  );
};

export default SliderAbout;
