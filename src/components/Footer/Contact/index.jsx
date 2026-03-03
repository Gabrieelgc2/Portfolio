import styles from './Contact.module.css'
import minhaFoto from '../../../img/PortfolioFOTO.jpg';

function Contact() {
    return(

 <div className={styles.containerhome}>
            <div className="mb-5 flex flex-col gap-10 lg:flex-1">
                <h1 className="text-2xl lg:text-6xl">Olá, eu sou Gabriel Garcia.</h1>
 <div className="px-5">
  <h2 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4 sm:text-2xl">
    Evolua o seu negócio com um site de alto nível que garanta segurança, confiança e qualidade. <br></br>Não perca essa oportunidade e entre em contato!
  </h2>
</div>
            </div>

            <div className={styles.heroImg}>
                <img src={minhaFoto} alt="Sua foto" />
            </div>
        </div>
    )
}
export default Contact