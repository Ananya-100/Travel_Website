import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/moutain.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Our Services"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
