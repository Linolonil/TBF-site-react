import styles from './Card.module.css';
import PropTypes from 'prop-types';


export default function CardIntegrantes({ name, funcao ,imagem ,champion }) {
  return (
    <div className={styles.card}>
    <div className={styles.card_content}>
    <div className={styles.card_front} style={{ backgroundImage: `url(${imagem})` }}>
        <h1 className={styles.title}>{`${name}`}</h1>
      </div>

      <div className={styles.card_back} style={{ backgroundImage: `url(${champion})`}}>
        <div className={styles.back_title}>{name}</div>
        <div className={styles.movie_description}>
          <span>descricao: </span>{funcao}
        </div>
        <div className={styles.genre}>
        </div>
        <a href="#" className={styles.btn}>desempenho individual</a>
      </div>            
    </div>
  </div>
  );
}
CardIntegrantes.propTypes = {
    name: PropTypes.string.isRequired,
    funcao: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    champion: PropTypes.string.isRequired,
  };

