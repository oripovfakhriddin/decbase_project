import style from "./service.module.css"
import { Container } from "../../UI"

export const Service = () => {
  return <>
  <section id={style.service}>
     <Container>
        <div className={style.service__box}>
          <p className={style.service__text}>WHAT WE DO</p>
          <h2 className={style.service__title}>Our Service</h2>
          <ul className={style.service__list}>
            <li className={style.service__item}>
                <div className={style.service__item__box}>
                  <h3>Interior Design</h3>
                  <p>Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.</p>
                </div>
            </li>
            <li className={style.service__item}>
            <div className={style.service__item__box}>
                  <h3>Architecture</h3>
                  <p>Lorem ipsum dolor amet consecteturadipiscing elit sed eiusmod temporincididunt ut labore.</p>
                </div>
            </li>
            <li className={style.service__item}>
            <div className={style.service__item__box}>
                  <h3>Planning</h3>
                  <p>Lorem ipsum dolor amet consecteturadipiscing elit sed eiusmod temporincididunt ut labore.</p>
                </div>
            </li>
          </ul>
        </div>
      </Container>  
  </section>
     
  </>
}