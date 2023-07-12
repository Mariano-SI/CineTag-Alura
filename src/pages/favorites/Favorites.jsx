import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Title from '../../Components/Title/Title'
import styles from "./Favorites.module.css"
import Card from '../../Components/Card/Card'

const Favorites = () => {
  return (
    <>
        <Banner imageName="favoritos"/>
        <Title><h1>Meus Favoritos</h1></Title>
        <section className={styles.container}>
            <Card id="1" titulo="Gato Bonifacio" bannerImage="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img4.png"/>
        </section>
    </>
  )
}

export default Favorites