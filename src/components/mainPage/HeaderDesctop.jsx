"use client"
import Image from 'next/image'
import styles from './mainPage.module.css'
import Link from 'next/link'
import logo from '../../../public/favicon/вхождение в огоньь.png'
import { AiOutlineAlignRight } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react'


const HeaderDesctop = ({ children }) => {


	const [active, setActive] = useState(false)

	const changeConditionHandler = () => {
		active ? setActive(false) : setActive(true)
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image className={styles.logoImg} alt='logo' height={90} width={200} src={logo}></Image>
				</div>
				
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
						<Link className={styles.categoryLink} href={'/media'}>Медиа</Link>
					</li>
				</ul>
				<div className={styles.burgerMenu} onClick={changeConditionHandler}>
					<p className={styles.buttonBurg}>{active ? <AiOutlineClose /> : <AiOutlineAlignRight />}</p>
					{active &&
						<ul className={styles.burgerList}>
							<li className={styles.burgerItem}>
								<Link className={styles.categoryLink} href={'/'}>Главная</Link>
							</li>
							<li className={styles.burgerItem}>
								<Link className={styles.categoryLink} href={'/about'}>О проекте</Link>
							</li>
							<li className={styles.burgerItem}>
								<Link className={styles.categoryLink} href={'/libary'}>Библиотека фактов</Link>
							</li>
							<li className={styles.burgerItem}>
								<Link className={styles.categoryLink} href={'/team'}>Команда</Link>
							</li>
							<li className={styles.burgerItem}>
								<Link className={styles.categoryLink} href={'/news'}>Новости</Link>
							</li>
							<li className={styles.burgerItem}>
								<Link className={styles.categoryLink} href={'/media'}>Медиа</Link>
							</li>
						</ul>
					}
				</div>
			</div>
			{children}
		</>
	)
}

export default HeaderDesctop
