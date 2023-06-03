import styles from "./page.module.css";
import HeaderDesctop from "@/components/mainPage/HeaderDesctop";
import ButtonRedirect from "@/components/mainPage/ButtonRedirect";
import getMainPageInfo from "@/services/getMainPageInfo";
import Image from "next/image";

const getInfo = async () => {
  const data = await getMainPageInfo(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/main-info?populate=*`,
    { next: { revalidate: 30, useCdn: false } }
  );
  return data.data;
};

const Home = async () => {
  const info = await getInfo();


  return (
    <>
      <HeaderDesctop>
        <div className={styles.container}>
          <div className={styles.mainImgBlock}>
            <Image
              className={styles.img}
              alt=""
              width={`${info.attributes.backroundImg.data.attributes.width}`}
              height={`${info.attributes.backroundImg.data.attributes.height}`}
              src={`${process.env.NEXT_GET_IMG}${info.attributes.backroundImg.data.attributes.url}`}
            />
          </div>
          <div className={styles.mainText}>
            <h1 className={styles.heading}>{info.attributes.title}</h1>
            <p className={styles.text}>{info.attributes.aboutUs}</p>
            <ButtonRedirect
              link={info.attributes.linkForContact}></ButtonRedirect>
          </div>
        </div>
      </HeaderDesctop>
    </>
  );
};

export default Home;
