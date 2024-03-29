import style from './cards.module.css'

export default function Cards (){

  const integrantesData = [
      {
        "id": 1,
        "nome": "Limoeiro",
        "funcao": "ALL LANES",
        "elo": "esmeralda",
        "champion": "../../../public/champion/maokai.jpg"  ,
        "imagem": "../../../public/criminosos/Eu.png"
      },
      {
        "id": 2,
        "nome": "Aiox",
        "funcao": "MID/ADC",
        "elo": "diamante",
        "champion": "../../../public/champion/anivia.jpg"  ,
        "imagem": "../../../public/criminosos/Aiox.jpg"
      },
      {
        "id": 3,
        "nome": "Pira",
        "funcao": "ALL LANES",
        "elo": "ouro",
        "champion": "../../../public/champion/amumu.jpg"  ,
        "imagem": "../../../public/criminosos/pira.jpg"
      },
      {
        "id": 4,
        "nome": "Thales",
        "funcao": "ADC/SUP",
        "elo": "ouro",
        "champion": "../../../public/champion/lucian.jpg"  ,
        "imagem": "../../../public/criminosos/Eu.png"
      },
      {
        "id": 5,
        "nome": "Lari",
        "funcao": "SUP",
        "elo": "ouro",
        "champion": "../../../public/champion/galio.jpg"  ,
        "imagem": "../../../public/criminosos/Eu.png"
      },
      {
        "id": 6,
        "nome": "Marconha",
        "funcao": "ADC/JG",
        "elo": "esmeralda",
        "champion": "../../../public/champion/kindred.jpg"  ,
        "imagem": "../../../public/criminosos/marconha.jpg"
      },
      {
        "id": 7,
        "nome": "Brayan",
        "funcao": "JG",
        "elo": "ouro",
        "champion": "../../../public/champion/rammus.jpg"  ,
        "imagem": "../../../public/criminosos/Braia.jpg"
      },
      {
        "id": 8,
        "nome": "Kraudin",
        "funcao": "JG",
        "elo": "esmeralda",
        "champion": "../../../public/champion/nunu.jpg"  ,
        "imagem": "../../../public/criminosos/Eu.png"
      },
      {
        "id": 9,
        "nome": "Nakawak",
        "funcao": "ADC",
        "elo": "platina",
        "champion": "../../../public/champion/rato.jpg"  ,
        "imagem": "../../../public/criminosos/Eu.png"
      },
      {
        "id":10,
        "nome": "Gar",
        "funcao" : "TOP/ADC",
        "elo": "platina",
        "champion": "../../../public/champion/trundle.jpg"  ,
        "imagem": "../../../public/criminosos/gar.jpg"
      },
      {
        "id":11,
        "nome": "Natália",
        "funcao" : "ADC/SUP",
        "elo": "platina",
        "champion": "../../../public/champion/xayah.jpg"  ,
        "imagem": "../../../public/criminosos/natalia.jpg"
      },
      {
        "id":12,
        "nome": "Willzada",
        "funcao" : "SUP",
        "elo": "ouro",
        "champion": "../../../public/champion/zyra.jpg"  ,
        "imagem": "../../../public/criminosos/will.jpg"
      }
    ];
  
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