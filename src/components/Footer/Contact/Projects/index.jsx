import { CardDefault } from './Cards/card'
import styles from './Projects.module.css'

function Projects() {

  return (
    <>
    <div className="pb-20 lg:mb-15" id="projetos">
      <div className="flex flex-wrap gap-9 justify-center lg:flex flex-col">
      <h1 className={styles.textProjetos}>EXPERIÊNCIAS</h1>
      <p className='lg:text-base'>Aqui estão algum dos meus projetos selecionados que demonstram minhas competências técnicas.</p>
      </div>
    <CardDefault/>
    </div>
    
    </>
  )
}

export default Projects