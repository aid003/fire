import HeaderDesctop from "@/components/mainPage/HeaderDesctop";
import React from "react";
import styles from "./news.module.css";
import getMainPageInfo from "@/services/getMainPageInfo";
import NewsCard from './NewsCard';

const getInfo = async () => {
  const data = await getMainPageInfo(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/news-pages?populate=*`,
    { next: { revalidate: 300, useCdn: false } }
  );
  //   console.log(data.data);
  return data?.data;
};

const page = async () => {
  const info = await getInfo();
  return (
    <>
      <HeaderDesctop>
        <div className={styles.container}>
          {info.map((item) => (
            <NewsCard key={item.id} baseUrl={process.env.NEXT_GET_IMG} data={item} />
          ))}
        </div>
      </HeaderDesctop>
    </>
  );
};

export default page;
