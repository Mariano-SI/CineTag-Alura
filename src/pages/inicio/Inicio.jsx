import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import videos from '../../json/bd.json'
import styles from './Inicio.module.css'


const Inicio = () => {
  return (
  <>
    <Banner imageName='home'/>
    <Title><h1>Um lugar para guardar seus vídeos e filmes!</h1></Title>
    <section className={styles.container}>
      {videos.map((video)=>(
        <Card key={video.id}id={video.id} titulo={video.titulo} bannerImage={video.capa}/>
      ))}
    </section>

  </>
  )
}

export default Inicio;