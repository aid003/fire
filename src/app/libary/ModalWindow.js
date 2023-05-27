import Image from "next/image";
import React from "react";
import styles from "./libary.module.css";

const ModalWindow = ({ img, title, text }) => {
  return (
    <div className={styles.openCard}>
      <Image
        alt=""
        className={styles.imgModal}
        width={450}
        height={300}
        src={img}
      />
      <h3 className={styles.headingModal}>{title}</h3>
      <div className={styles.textContainerModal}>{text}</div>
    </div>
  );
};

export default ModalWindow;
