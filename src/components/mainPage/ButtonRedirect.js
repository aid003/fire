"use client";
import { useRouter } from "next/navigation";
import styles from './mainPage.module.css'

const ButtonRedirect = ({ link }) => {
  const router = useRouter();

  const activityHandler = () => {
    router.push(link);
  };

  return (
    <form className={styles.formButton} onClick={activityHandler}>
      <span className={styles.circle}></span>
      <button className={styles.buttonRedirect}>Мероприятия в вашем городе</button>
    </form>
  );
};

export default ButtonRedirect;
