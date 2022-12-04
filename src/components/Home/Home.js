import { Fragment } from "react";
import HeroSection from "./HeroSection/HeroSection";
import MainContent from "./MainContent/MainContent";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <MainContent />
    </Fragment>
  );
}
