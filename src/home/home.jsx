import React from "react";
import { MainLayout } from "../layout";
import { Design } from "../components/section/designsection";
import { Service } from "../components/section/servicesection";
import { About } from "../components/section/aboutsection";
export const Home = () => {
return<>
  <MainLayout>
    <Design/>
    <Service/>
    <About/>
  </MainLayout>
</>
}