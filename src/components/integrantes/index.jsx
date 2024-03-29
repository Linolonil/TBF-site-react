import style from "./integrantes.module.css";
import Cards from '../cards';

export default function Integrantes() {


  return (
    <section className={style.integrantes} id="integrantes">
      <div className={style.integrantes_card}>
        <div className={style.integrantes_title}>
          <h2>
            <span className={style.intro_text_tbf}>I</span>ntegrantes
          </h2>
        </div>
        <Cards/>
      </div>
    </section>
  );
}
