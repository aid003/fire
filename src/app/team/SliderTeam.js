"use client";

import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import {BsChevronCompactRight} from "react-icons/bs";
import styles from "./team.module.css";

const SliderTeam = ({ data, baseUrl }) => {
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

  const backSlideHandler = () => {
    currentSlide - 1 < 0
      ? setCurrentSlide(urls.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  return (
    <>
      <div className={styles.slideContainer}>
        <button className={styles.buttonImg} onClick={backSlideHandler}>
          <BsChevronCompactLeft className={styles.arrow} />
        </button>
        <Image
          className={styles.img}
          alt=""
          width={700}
          height={500}
          src={`${baseUrl}${urls[currentSlide]}`}
        />
        <button className={styles.buttonImg} onClick={nextSlideHandler}>
          <BsChevronCompactRight className={styles.arrow} />
        </button>
      </div>
    </>
  );
};

export default SliderTeam;
