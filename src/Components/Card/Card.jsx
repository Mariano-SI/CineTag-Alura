/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Card.module.css'
import favIcon from '../../../public/images/favorite.png'

const Card = ({id, titulo, bannerImage}) => {
  return (
    <div className={styles.container}>
        <img src={bannerImage} alt={titulo} className={styles.bannerImage}/>
        <h3>{titulo}</h3>
        <img src={favIcon} alt="Favoritar filmes" className={styles.favorite} />
    </div>
  )
}

export default Card