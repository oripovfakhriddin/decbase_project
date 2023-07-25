import React from "react";
import { Header } from "./header";
import { Footer } from "./footer"
import style from "./layout.module.css"
export const MainLayout=({children})=>{
  return <>
  <div className={style.wrapper}>
    <header>
     <Header/>
    </header>
    <main>
     {children}
    </main>
  </div>
  
   <footer>
    <Footer/>
   </footer>
  </>
}