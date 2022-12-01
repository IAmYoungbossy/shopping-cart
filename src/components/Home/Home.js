import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import MainContent from "./MainContent/MainContent";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </Fragment>
  );
}
