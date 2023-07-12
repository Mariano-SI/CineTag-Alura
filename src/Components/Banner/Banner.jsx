import styles from './Banner.module.css'


// eslint-disable-next-line react/prop-types
const Banner = ({imageName}) => {
  return (
    <div 
        className={styles.banner} 
        style={{backgroundImage:`url('../../../public/images/banner-${imageName}.png')`}}>

    </div>
  )
}

export default Banner