import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import Services from "./components/Services";
import Office from "./components/Office";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Office />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}