"use client";

import { useEffect, useState } from "react";
import styles from "./news.module.css";
import Image from "next/image";
import ModalNewsWindow from "./ModalNewsWindow";

const NewsCard = ({ baseUrl, data }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isActivateModalWindow, setIsActivataModalWindow] = useState(false);

  useEffect(() => {
    if (data?.attributes.isHaveVideo && data?.attributes.video.data != null) {
      setVideoUrl(data?.attributes.video.data[0]?.attributes.url);
    }
  }, [data]);

  const showModalWindow = () => {
    setIsActivataModalWindow(true);
  };
  return (
    <>
      {isActivateModalWindow && (
        <div className={styles.layout}>
          <button className={styles.closeButton}
            onClick={() => {
              setIsActivataModalWindow(false);
            }}>
            Закрыть
          </button>
          <ModalNewsWindow
            img={`${baseUrl}${data?.attributes.img.data.attributes.url}`}
            text={data?.attributes.text}
            video={`${baseUrl}${videoUrl}`}
            title={data?.attributes.title}
            isVideo={data?.attributes.isHaveVideo}
          />
        </div>
      )}
      <div className={styles.Newcontainer}>
        <Image
          className={styles.img}
          width={400}
          height={400}
          src={`${baseUrl}${data?.attributes.img.data?.attributes.url}`}
          alt=""
        />
        <div className={styles.textContent}>
          <h3 className={styles.headingCard}>{data?.attributes.title}</h3>
          <p className={styles.shortDescription}>
            {data?.attributes.shortDescription}
          </p>
          <button className={styles.cardButton} onClick={showModalWindow}>Подробнее</button>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
