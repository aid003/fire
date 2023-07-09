import Image from 'next/image'
import styles from '../team.module.css'

const Card = ({name, range, text, img}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardLeftImgSide}>
        <Image className={styles.cardLeftImg} alt='' width={210} height={270} src={img}></Image>
      </div>
      <div className={styles.cardRightSide}>
        <div>
          <p className={`${styles.cardRightItem} ${styles.cardName}`}>{name}</p>   
          <p className={`${styles.cardRightItem} ${styles.cardRange}`}>{range}</p> 
        </div>
        <p className={`${styles.cardRightItem} ${styles.cardText}`}>{text}</p> 
      </div>
    </div>
  )
}

export default Card