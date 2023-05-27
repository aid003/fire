import React, { useState } from "react";
import styles from "./news.module.css";
import Image from "next/image";

const ModalNewsWindow = ({ img, text, title, video = "", isVideo }) => {
  return (
    <div className={styles.modalWindowContainer}>
      {!isVideo ? <Image className={styles.modalImg} src={img} width={400} height={400} alt="" /> : <video controls src={video} className={styles.video} />}
      <div className={styles.windowTextContent}>
        <h3 className={styles.windowTitle}>{title}</h3>
        <p className={styles.windowText}>{text}</p>
      </div>
    </div>
  );
};

export default ModalNewsWindow;
