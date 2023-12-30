import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
// import Main from "../components/Main";
import ServicesComponent from "../components/ServicesComponent";
import ReferencesComponent from "../components/ReferencesComponent";
import ContactComponent from "../components/ContactComponent";
import { useContext } from "react";
import { NavbarContext } from "../context/ContextNavbar";

function Home() {
  const { isOpen } = useContext(NavbarContext);
  return (
    <>
      <Banner></Banner>
      {/* <Main></Main> */}
      <AboutUs></AboutUs>
      <ServicesComponent></ServicesComponent>
      <ReferencesComponent></ReferencesComponent>
      <ContactComponent></ContactComponent>
    </>
  );
}

export default Home;
