"use client";
import Image from "next/image";
import styles from "./libary.module.css";
import { useState } from "react";
import ModalWindow from "./ModalWindow";

const Card = ({ data, baseUrl }) => {
  const [active, setActive] = useState(0);

  const addClassHandler = () => {
    active === 0 ? setActive(1) : setActive(0);
  };
  return (
    <>
      {active ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setActive(0);
          }}>
          <ModalWindow
            img={`${baseUrl}${data.img.data.attributes.url}`}
            title={data.title}
            text={data.text}
          />
        </div>
      ) : ''}
      <div id="" className={styles.cardItem} onClick={addClassHandler}>
        <Image
          alt=""
          className={styles.img}
          width={450}
          height={300}
          src={`${baseUrl}${data.img.data.attributes.url}`}
        />
        <h3 className={styles.heading}>{data.title}</h3>
        <div className={styles.textContainer}>{data.text}</div>
      </div>
    </>
  );
};

export default Card;
