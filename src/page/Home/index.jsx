import Contatos from '../../components/contatos';
import Eventos from '../../components/eventos';
import Footer from '../../components/footer';
import Integrantes from '../../components/integrantes';
import Navbar from '../../components/navbar';
import Sobre from '../../components/sobre';
import IntroTBF from './../../components/introTBF/index';


export default function Home(){
  return(
    <>
      <Eventos/>
      <Navbar/>
      <IntroTBF/>
      <Sobre/>
      <Integrantes/>
      <Contatos/>
      <Footer/>
    </>
  )
}