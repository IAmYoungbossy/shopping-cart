import { Fragment } from "react";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import MainContent from "./MainContent/MainContent";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <MainContent />
    </Fragment>
  );
}
