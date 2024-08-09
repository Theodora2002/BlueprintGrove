import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FaChevronRight,FaCircleCheck } from "react-icons/fa6";
import Small from "../components/Small";
import Ourserv from "../components/Ourserv";
import Professerv from "../components/Professerv";


export default function Services() {

  return (
    <>
      <NavBar />
      <section id="aboutushero" className="w-full h-[40vh]">
        <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
          <p className=" text-whiiteish text-3xl font-bold">Services</p>
        </div>
      </section>
      <Professerv />
      <section className="w-full h-full">
        <Ourserv />
        <div className="mt-10">
          <Small text="Our Services" styling="ml-[46%]" />
          <p className="text-darkblue text-2xl font-bold text-center mb-4">
            How we Work
          </p>
          <p className=" text-greyish text-xs text-center mb-10">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In
            <br /> sed pretium metus. Proin pretium id urna sit amet tincidunt.
          </p>
          <div className="grid grid-cols-[1fr,3fr] gap-8 w-[65%] mx-auto mb-32">
            <div>
              <button className="hover:bg-orangeyellow w-full mb-2 bg-whiiteish text-darkblue px-3 py-3 text-xs font-bold flex justify-between items-center">
                <p className="inline">Commercial Services</p>{" "}
                <FaChevronRight className="inline w-3 h-3" />
              </button>
              <button className="hover:bg-orangeyellow w-full mb-2 bg-whiiteish text-darkblue px-3 py-3 text-xs font-bold flex justify-between items-center">
                <p className="inline">Residential Services</p>{" "}
                <FaChevronRight className="inline w-3 h-3" />
              </button>
              <button className="hover:bg-orangeyellow w-full mb-2 bg-whiiteish text-darkblue px-3 py-3 text-xs font-bold flex justify-between items-center">
                <p className="inline">Industrial Services</p>{" "}
                <FaChevronRight className="inline w-3 h-3" />
              </button>
              <div className="mt-6 bg-darkblue h-[30vh]"></div>
            </div>
            <div className="">
              <p className="text-darkblue font-bold text-base mb-2">
                We can help you with the following services:
              </p>
              <p className="text-greyish text-xs">
                Pellentesque vehicula eros neque, maximus mattisin sagittis
                Nulla facilisi. In sed pretium metus Proin pretium id urna
                Interdum et malesuada.
              </p>
              <div className="constructionimg w-full h-[42vh] mt-4"></div>
              <div className="grid grid-cols-2 mt-4">
                <div>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                </div>
                <div>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                  <p className="mt-4 text-xs">
                    <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                    Electrical Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
