import getMainPageInfo from "@/services/getMainPageInfo";
import React from "react";

import HeaderDesctop from "@/components/mainPage/HeaderDesctop";
import styles from "./team.module.css";
import Card from "./rebuildTeam/Card";

const getInfo = async () => {
  const data = await getMainPageInfo(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/team-page-rebuilds?populate=*`,
    { next: { revalidate: 60, useCdn: false } }
  );
    // console.log(data.data);
  return data.data;
};

const page = async () => {
  const info = await getInfo();
  return (
    <>
      <HeaderDesctop>
        <div className={styles.container}>
          {info.map((el) => (
            <Card key={el.id} name={el.attributes.name} range={el.attributes.range} text={el.attributes.text} img={`${process.env.NEXT_GET_IMG}${el.attributes.img.data.attributes.url}`}></Card>
          ))}
        </div>
      </HeaderDesctop>
    </>
  );
};

export default page;
