import About from "@/Components/About/About";
import ContactUs from "@/Components/ContactUs/ContactUs";
import Header from "@/Components/Header/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Services from "@/Components/Services/Services";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Fotter from "@/Components/fotter/Fotter";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Testimonials />
      <ContactUs />
      <Fotter />
    </>
  )
}
export default Home;