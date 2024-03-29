import style from './cards.module.css'
import integrantesData from './integrantes.json'

export default function Cards (){
  
  return(
    <div className={style.cards}>
    {integrantesData.sort((a, b) => a.nome.localeCompare(b.nome)) 
  .map((integrante) => (
      <div
        key={integrante.id}
        className={style.card}
      >
        <div className={style.wrapper} >
          <img src={integrante.imagem} className={style.cover_image}  alt={integrante.nome} />
        </div>
        <img src={integrante.champion} className={style.character} alt={integrante.nome}/>
        <h4 className={style.title}><span>{integrante.nome}</span></h4>
        <h4 className={style.title_position}>{integrante.funcao}</h4>
        </div>
    ))}
  </div>
  )
}