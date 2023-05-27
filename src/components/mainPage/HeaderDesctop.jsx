import Image from 'next/image'
import styles from './mainPage.module.css'
import Link from 'next/link'




const HeaderDesctop = ({ children }) => {

	return (
		<>
			<div className={styles.container}>
				<div className={styles.logo}>
					{/* <Image height={50} width={50} src={}></Image> */}
				</div>
				<h1 className={styles.heading}>Хождение в огонь</h1>
				<ul className={styles.categoryList}>
					<li className={styles.categoryItem}>
						<Link className={styles.categoryLink} href={'/'}>Главная</Link>
					</li>
					<li className={styles.categoryItem}>
						<Link className={styles.categoryLink} href={'/about'}>О проекте</Link>
					</li>
					<li className={styles.categoryItem}>
						<Link className={styles.categoryLink} href={'/libary'}>Библиотека фактов</Link>
					</li>
					<li className={styles.categoryItem}>
						<Link className={styles.categoryLink} href={'/team'}>Команда</Link>
					</li>
					<li className={styles.categoryItem}>
						<Link className={styles.categoryLink} href={'/news'}>Новости</Link>
					</li>
					<li className={styles.categoryItem}>
						<Link className={styles.categoryLink} href={'/media'}>Медия</Link>
					</li>
				</ul>
			</div>
			{children}
		</>
	)
}

export default HeaderDesctop
