
import style from "./sobre.module.css";
import CardsTexts from './../cardsTexts/index';

export default function Sobre() {
 

  return (
    <section className={style.sobre} id="sobre">
      <h2>
        <span className={style.intro_text_tbf}>H</span>istória
      </h2>
      <div className={style.sobre_card}>
        <CardsTexts/>
      </div>
    </section>
  );
}
