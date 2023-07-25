import style from "./footer.module.css"
import { Container } from "../../components/UI"
import logo from "../../assets/project-logo.png"
import icon1 from "../../assets/facebook.svg"
import icon2 from "../../assets/twitter.svg"
import icon3 from "../../assets/instagram.svg"
import icon4 from "../../assets/linkedin.svg"
export const Footer = () => {
  return <>
  <Container>
    <div className={style.footer__box}>
      <div className={style.footer__logo_box}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <p className={style.footer__text}>
          But i must explain to you all this mistaken
          idea of dencouncing pleasure.
        </p>
      </div>
      <div className={style.footer__list_box}>
        <ul className={style.footer__list}>
          <h2 className={style.footer__title}>Quick Links</h2>
          <li><a href="#">About Our Company</a></li>
          <li><a href="">Services We provide </a></li>
          <li><a href="">Career & Opportunity</a></li>
          <li><a href="">Privacy & policy</a></li>
          <li><a href="">Contact US</a></li>
        </ul>
        <ul className={style.footer__list}>
          <h2 className={style.footer__title}>Company</h2>
          <li><a href="#">About Company</a></li>
          <li><a href="">Our Testimonials</a></li>
          <li><a href="">Latest News</a></li>
          <li><a href="">Our misson</a></li>
          <li><a href="">Get a free Quot</a></li>
        </ul>
        <ul className={style.footer__list}>
          <h2 className={style.footer__title}>Contact us</h2>
          <li><a href="#">Sagrada Familia, Herba</a></li>
          <li><a href="">Street Front USA</a></li>
          <li><a href="">brandoxide@gmail.com</a></li>
          <li><a href="">002-568423591</a></li>
         
        </ul>
        <ul className={style.footer__list}>
          <h2 className={style.footer__title}>Follow Us</h2>
         <div>
         <li className={style.footer__icon_item}><a href="#">
              <img src={icon1} alt="icon" />
            </a></li>
          <li className={style.footer__icon_item}><a href="">
              <img src={icon2} alt="icon" />
            </a></li>
          <li className={style.footer__icon_item}><a href="">
              <img src={icon3} alt="icon" />
            </a></li>
          <li className={style.footer__icon_item}><a href="">
              <img src={icon4} alt="icon" />
            </a></li>
         </div>
          
        </ul>
      </div>
    </div>
  </Container>
  
    
  </>
}