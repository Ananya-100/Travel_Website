import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1544945582-052b29cd29e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1030&q=80"
        title="Your Journey Your Story"
        text="Choose your Destination."
        buttonText="Explore Now"
        url="/"
        btnClass="show"
      />

      <Destination />
      <Footer />
    </>
  );
}
export default Home;
