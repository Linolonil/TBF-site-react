import style from "./contatos.module.css";

export default function Contatos() {
  return (
    <section className={style.contatos} id="contatos">
          <h2>
            <span className={style.intro_text_tbf}>C</span>ontatos
          </h2>
      <div className={style.contatos_card}>
        <div className={style.contatos_title}>
        </div>
        <div className={style.contatos_list}>
          <div>
            <h4>Email</h4>
            <p><a href="mailto:tbfclan@gmail.com" target='_blank'>tbfclan@gmail.com</a></p>
          </div>
          <div>
            <h4>Telefone</h4>
            <p>(92)9400-28922</p>
          </div>
          <div>
            <h4>Discord</h4>
            <p> <a href="https://discord.gg/PN78gGNUMQ" target='_blank'>Redirecionador</a>
</p>
          </div>
        </div>
      </div>
    </section>
  );
}
