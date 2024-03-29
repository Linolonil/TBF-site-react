import { useState, useEffect } from 'react';
import style from './eventos.module.css';
import eventData from './eventoJson.json';

export default function Eventos() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const {dia, hora} = eventData[0];
  console.log(dia)

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date(`${dia}T${hora}`); 
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const { evento } = eventData[0];

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <section className={style.eventos}>
      <div className={style.container}>
        <div className={style.timerItem}>
          <span>{evento} - {formatNumber(countdown.days)} dias {formatNumber(countdown.hours)} horas {formatNumber(countdown.minutes)} minutos  {formatNumber(countdown.seconds)} segundos</span>
        </div>
      </div>
    </section>
  );
}
