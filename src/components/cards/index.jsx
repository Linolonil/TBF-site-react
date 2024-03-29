import style from './cards.module.css'


export default function Cards (){
  const integrantesData = [
      {
        "id": 1,
        "nome": "Limoeiro",
        "funcao": "ALL LANES",
        "elo": "esmeralda",
        "champion": "/champion/maokai.jpg"  ,
        "imagem": "/criminosos/Eu.png"
      },
      {
        "id": 2,
        "nome": "Aiox",
        "funcao": "MID/ADC",
        "elo": "diamante",
        "champion": "/champion/anivia.jpg"  ,
        "imagem": "/criminosos/Aiox.jpg"
      },
      {
        "id": 3,
        "nome": "Pira",
        "funcao": "ALL LANES",
        "elo": "ouro",
        "champion": "/champion/amumu.jpg",
        "imagem": "/criminosos/pira.jpg"
      },
      {
        "id": 4,
        "nome": "Thales",
        "funcao": "ADC/SUP",
        "elo": "ouro",
        "champion": "/champion/lucian.jpg"  ,
        "imagem": "/criminosos/Eu.png"
      },
      {
        "id": 5,
        "nome": "Lari",
        "funcao": "SUP",
        "elo": "ouro",
        "champion": "/champion/galio.jpg"  ,
        "imagem": "/criminosos/Eu.png"
      },
      {
        "id": 6,
        "nome": "Marconha",
        "funcao": "ADC/JG",
        "elo": "esmeralda",
        "champion": "/champion/kindred.jpg",
        "imagem": "/criminosos/marconha.jpg"
      },
      {
        "id": 7,
        "nome": "Brayan",
        "funcao": "JG",
        "elo": "ouro",
        "champion": "/champion/rammus.jpg"  ,
        "imagem": "/criminosos/Braia.jpg"
      },
      {
        "id": 8,
        "nome": "Kraudin",
        "funcao": "JG",
        "elo": "esmeralda",
        "champion": "/champion/nunu.jpg"  ,
        "imagem": "/criminosos/Eu.png"
      },
      {
        "id": 9,
        "nome": "Nakawak",
        "funcao": "ADC",
        "elo": "platina",
        "champion": "/champion/rato.jpg"  ,
        "imagem": "/criminosos/Eu.png"
      },
      {
        "id":10,
        "nome": "Gar",
        "funcao" : "TOP/ADC",
        "elo": "platina",
        "champion": "/champion/trundle.jpg"  ,
        "imagem": "/criminosos/gar.jpg"
      },
      {
        "id":11,
        "nome": "Natália",
        "funcao" : "ADC/SUP",
        "elo": "platina",
        "champion": "/champion/xayah.jpg"  ,
        "imagem": "/criminosos/natalia.jpg"
      },
      {
        "id":12,
        "nome": "Willzada",
        "funcao" : "SUP",
        "elo": "ouro",
        "champion": "/champion/zyra.jpg"  ,
        "imagem": "/criminosos/will.jpg"
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