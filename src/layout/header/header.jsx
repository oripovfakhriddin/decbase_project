import { Container } from "../../components/UI"
import style from "./header.module.css"
import logo from "../../assets/project-logo.png"
export const Header = () => {
  return <>
   <Container>
      <div className={style.header__box}>
        <div className={style.header__logo__box}>
          <a className={style.header__logo__link} href="#">
            <img className={style.header__logo} src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <nav>
            <ul className={style.header__list}>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">Home</a>
              </li>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">Project</a>
              </li>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">Services</a>
              </li>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">About</a>
              </li>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">Blog</a>
              </li>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">Shop</a>
              </li>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">Contact</a>
              </li>
              <li className={style.header__item}>
                <a className={style.header__item_link} href="#">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
    
    </Container>
  </>
}