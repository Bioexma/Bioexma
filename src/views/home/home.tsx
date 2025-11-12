
import styles from './home.module.css';
import logo from '../../assets/img/logo.png';
export default function Home() {
  return (
    <section className={styles.homepage }>
        <div className={styles.content}>
            <div className={styles.text}>
            <div className={styles.loader}>
    <div  className={styles.logo} >
      <img src={logo} alt="" />
    </div>
</div>

               
                <h1>¡Bienvenidos a Bioexma!</h1>
                <p>Una página web educativa para explorar el fascinante mundo de la célula y sus procesos</p>
                <button className={styles.cta}><a href="/about">Conócenos</a></button>
            </div>
            {/* <a href="/juegos">Comencemos</a> */}
        </div>
    </section>
  )
}