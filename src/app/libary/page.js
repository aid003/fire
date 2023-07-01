import HeaderDesctop from "@/components/mainPage/HeaderDesctop";
import styles from "./libary.module.css";
import getMainPageInfo from "@/services/getMainPageInfo";
import Card from "./Card";

const getInfo = async () => {
  const data = await getMainPageInfo(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/libary-pages?populate=*`,
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
            <Card
              key={item?.id}
              data={item?.attributes}
              baseUrl={process.env.NEXT_GET_IMG}
            />
          ))}
        </div>
      </HeaderDesctop>
    </>
  );
};

export default page;
