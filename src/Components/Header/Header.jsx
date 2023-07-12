import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/images/Logo-cinetag-branco.png';
import styles from '../Header/Header.module.css'
import HeaderLink from '../HeaderLink/HeaderLink';

const Header = () => {
  return (
    <header className={styles.header}>
        <Link to="./">
            <img src={logo} alt="Logo do CineTage" />
        </Link>
        <nav>
            <HeaderLink url="./">Home</HeaderLink>
            <HeaderLink url="./favoritos">Favoritos</HeaderLink>
        </nav>
    </header>
  )
}

export default Header