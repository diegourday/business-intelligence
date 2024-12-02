import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Info from "@/components/Info";
import Data from "@/components/Data";
import Graphic from "@/components/Graphic";
import Conclusions from "@/components/Conclusions";
import Footer from "@/components/Footer";
import Recommendations from "@/components/Recommendations";
import Team from "@/components/Team";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Links />
      <Info />
      <Data />
      <Graphic />
      <Conclusions />
      <Recommendations />
      <Team />
      <Footer />
    </>
  );
}
