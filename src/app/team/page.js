import getMainPageInfo from "@/services/getMainPageInfo";
import React from "react";
import SliderTeam from "./SliderTeam";
import HeaderDesctop from "@/components/mainPage/HeaderDesctop";
import styles from "./team.module.css";

const getInfo = async () => {
  const data = await getMainPageInfo(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/team-page?populate=*`,
    { next: { revalidate: 60, useCdn: false } }
  );
  //   console.log(data.data);
  return data.data;
};

const page = async () => {
  const info = await getInfo();
  return (
    <>
      <HeaderDesctop>
        <div className={styles.container}>
          <SliderTeam
            data={info.attributes.imgs.data}
            baseUrl={process.env.NEXT_GET_IMG}
          />
          <h3 className={styles.heading}>{info.attributes.title}</h3>
          <div className={styles.textContainer}>
            <p className={styles.text}>{info.attributes.text}</p>
          </div>
        </div>
      </HeaderDesctop>
    </>
  );
};

export default page;
