import { Container } from "../../UI";
import style from "./about.module.css";
import img from "../../../assets/aboutsection.jpg"
export const About =()=>{
  return <>
    <section id={style.about}>
      <Container>
        <div className={style.about__box}>
          <div className={style.about__img__box}>
            <img src={img} alt="home about img" />
          </div>
          <div className={style.about__text__box}>
            <p>ABOUT US</p>
            <h2>Interioris The Will of An Epoch Mextreo</h2>
            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, sure there isn't anything embarrassing hidden the middleof text. All the Lorem Ipsum generators on the Internettend to repeat predefined chunks as necessary,making this the first true generator on the Internet.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </Container>
    </section>
  </>
}