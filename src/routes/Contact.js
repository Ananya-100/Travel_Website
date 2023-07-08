import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Contact;
