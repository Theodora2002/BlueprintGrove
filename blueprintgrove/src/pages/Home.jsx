import Footer from "../components/Footer";
import Homepagecomp from "../components/Homepagecomp";
import NavBar from "../components/NavBar";
import Ourserv from "../components/Ourserv";
import PricingAd from "../components/pricingAd";
import Professerv from "../components/Professerv";

export default function Home() {
  return (
    <>
      <NavBar />
      <section id="homehero" className="w-full h-[80vh] pt-32">
        <div className="w-4/6 mx-auto py-3 h-full">
          <p className=" bg-[#ffffff70] text-xs rounded-sm text-darkblue font-semibold w-fit px-2 py-1 mb-5">
            We Provide Electric Services For Industrial Project
          </p>
          <p className="text-5xl font-bold text-[#ffffff] mb-10">
            We Are Professional <br />
            Quality Services
          </p>
          <a
            href="#servicessss"
            className="bg-orangeyellow py-3 px-4 text-sm font-bold"
          >
            Our Services
          </a>
        </div>
      </section>
      <Homepagecomp />
      <Professerv />
      <Ourserv />
      <PricingAd />
      <Footer />
    </>
  );
}
