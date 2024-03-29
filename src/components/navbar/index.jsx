import { useState, useEffect } from 'react';
import style from './navbar.module.css';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${style.navbar} ${isVisible ? style.visible : ''}`}>
      <ul className={style.navbar_list}>
        <a className={style.navbar_tbf} href="#"><p>T B F</p></a>
        <li><a href="#sobre">História</a></li>
        <li><a href="#integrantes">Integrantes</a></li>
        <li><a href="#contatos">Contatos</a></li>
      </ul>
    </nav>
  );
}
