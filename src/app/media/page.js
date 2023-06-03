import HeaderDesctop from "@/components/mainPage/HeaderDesctop";
import styles from "./media.module.css";
import getMainPageInfo from "@/services/getMainPageInfo";
import Image from "next/image";

const getInfo = async () => {
  const data = await getMainPageInfo(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/media?populate=*`,
    { next: { revalidate: 60, useCdn: false } }
  );
  return data.data;
};

const page = async () => {
  const info = await getInfo();

  return (
    <HeaderDesctop>
      <div className={styles.container}>
        <h3 className={styles.heading}>{info.attributes.title}</h3>
        {info.attributes.isHaveVideo && (
          <div className={styles.videoContainer}>
            <video
              className={styles.video}
              controls
              src={`${process.env.NEXT_GET_IMG}${info.attributes.video.data[0].attributes.url}`}></video>
          </div>
        )}
        <div className={styles.bookContainer}>
          <div className={styles.leftSide}>
            <span className={styles.text}>{info.attributes.text}</span>
            {/* <ReactMarkdown
              source={info.attributes.text}
              skipHtml={false}
            /> */}
          </div>
          <div className={styles.rightSide}>
            {info.attributes.imgs.data.map((item) => (
              <Image
                className={styles.img}
                key={item.id}
                alt=""
                width={400}
                height={350}
                src={`${process.env.NEXT_GET_IMG}${item.attributes.url}`}
              />
            ))}
          </div>
        </div>
      </div>
    </HeaderDesctop>
  );
};

export default page;
