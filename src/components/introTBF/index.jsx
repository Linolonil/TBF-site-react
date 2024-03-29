import { useState } from 'react';
import viking from "../../assets/viking.png";
import styles from "./introTBF.module.css";
import MusicPlayer from '../musicaIntro';

function IntroTBF() {
  const [play, setPlay] = useState(false);

  function startMusic() {
    setPlay(!play);
  }
  return (
    <div className={styles.intro}>
      <MusicPlayer startMusic={play}/>
      <img className={styles.intro_viking} src={viking} alt="viking" onClick={startMusic} />
      <h3 className={styles.intro_text_subtitle}>
        <span className={styles.intro_text_tbf}> ṭ</span>he
        <span className={styles.intro_text_tbf}> B</span>ig
        <span className={styles.intro_text_tbf}> F</span>riends
      </h3>
    </div>
  );
}

export default IntroTBF;
