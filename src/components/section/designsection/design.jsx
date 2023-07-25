import style from "./design.module.css"
import { Container } from "../../UI"
import img_design from "../../../assets/designsection.jpg"
export const Design =()=>{
  return <>
  <section>
     <Container>
    <div className={style.design__box}>
      <div className={style.design__title__block}>
          <p>MODERN INTERIOR</p>
          <h2>Create Your Interior Design.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <a href="#">CONTACT</a>
      </div>
      <div className={style.design__img__box}>
        <img src={img_design} alt="home img" />
      </div>
    </div>
  </Container>
  </section>
 
  </>
}