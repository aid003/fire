import HeaderDesctop from "@/components/mainPage/HeaderDesctop";
import React from "react";
import styles from "./about.module.css";
import MapsAbout from "./MapsAbout";
import getMainPageInfo from "@/services/getMainPageInfo";
import Image from "next/image";
import SliderAbout from "./SliderAbout";

const getInfo = async () => {
  const data = await getMainPageInfo(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about-page?populate=*`,
    { next: { revalidate: 60, useCdn: false } }
  );
  //   console.log(data.data);
  return data.data;
};

const Page = async () => {
  const info = await getInfo();

  return (
    <>
      <HeaderDesctop>
        <div className={styles.container}>
          <div className={styles.aboutImg}>
            <SliderAbout
              data={info?.attributes.imgs.data}
              baseUrl={process.env.NEXT_GET_IMG}
            />
          </div>
          <div className={styles.mainText}>
            <div>
              <h3 className={styles.heading}>{info?.attributes.header}</h3>
            </div>
            <p className={styles.text}>{info?.attributes.text}</p>
            <MapsAbout></MapsAbout>
          </div>
        </div>
      </HeaderDesctop>
    </>
  );
};

export default Page;
