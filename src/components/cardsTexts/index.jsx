import { useState } from 'react';
import TypeWriter from '../typing'
import style from './cardsTexts.module.css'

export default function CardsTexts(){
  const [active, setActive] = useState(false);

  function mudaActive(){
    setActive(true)
  }

  return(
    <div className={style.sobre_text_card}>
    <div className={style.sobre_text}>
      <p>
        O clã TBF [The Big Friends - Os grandes Amigos] teve sua gênese em
        2008, no calor das batalhas do servidor KillerC4 de{" "}
        <span className={style.red}>Lineage</span>, na vibrante cidade de
        Manaus, Amazonas. Criado por um grupo de amigos, a TBF rapidamente
        se tornou mais do que uma simples aliança em um jogo online -
        tornou-se uma verdadeira família virtual.
      </p>
    </div>
    <div className={style.sobre_text}>
      <p>
        O que começou como uma pequena comunidade local logo se expandiu
        para abraçar membros de todo o Brasil. A essência da TBF sempre
        foi a união e a amizade que transcendem as fronteiras físicas e se
        manifestam no mundo digital.
      </p>
    </div>
    <div className={style.sobre_text}>
      <p>
        Com o tempo, a TBF estendeu seus laços além do universo de
        <span className={style.red}> Lineage2</span>, adentrando outros
        jogos como <span className={style.red}>League of Legends</span>,{" "}
        <span className={style.red}>Valorant </span>e até mesmo atividades
        off-game, como partidas de{" "}
        <span className={style.red}>Dungeons & Dragons</span>. O princípio
        fundamental era evidente: onde quer que um membro da TBF
        estivesse, o restante do clã estaria ao seu lado, oferecendo apoio
        e compartilhando aquele momento.
      </p>
    </div>
    <div className={style.sobre_text}>
      <p>
        Mas a TBF é mais do que apenas um grupo de jogadores. É uma
        comunidade unida por laços forjados na confiança, na lealdade e,
        acima de tudo, na amizade. Eventos especiais, como assistir às
        finais do <span className={style.red}>CBLOL</span> ou de{" "}
        <span className={style.red}>Valorant</span> juntos, são apenas um
        exemplo do apoio mútuo e do espírito de equipe que permeiam o clã.
      </p>
    </div>
    <div className={style.sobre_text}>
      <p>
        Na TBF, não importa se você é um mestre, platina ou bronze nas
        batalhas virtuais ou se prefere desbravar mundos de fantasia em
        jogos de tabuleiro. O que importa é a conexão que compartilhamos,
        o apoio mútuo e a alegria de estarmos juntos, seja nos campos de
        batalha digitais ou nas confraternizações presenciais.
      </p>
    </div>
    <div className={style.sobre_text}>
     
        <TypeWriter active={active} value="- Entre todas as comunidades, não há nenhuma mais nobre e estável do que aquela em que os indivíduos estão unidos pela amizade -" />
        <br />
        
        <span className={style.autor}><button onClick={()=> mudaActive()}>- Aristóteles</button></span>
    </div>
  </div>
  )
}