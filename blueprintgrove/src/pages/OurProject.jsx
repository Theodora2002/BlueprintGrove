import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function OurProject() {
  return (
    <>
      <NavBar />
      <section id="projoushero" className="w-full h-[40vh]">
        <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
          <p className=" text-whiiteish text-3xl font-bold">Our Projects</p>
        </div>
      </section>
      <section className=" my-16 grid grid-cols-3 grid-rows-2 gap-10 mx-auto w-4/6">
        <div className="p-5 border-[#D2D2D2] border-[1px] h-[45vh] shadow-lg">
          <div className=" h-[80%] w-full bg-whiiteish mb-4 text-center">
            project pic
          </div>
          <p className="font-bold text-base text-darkblue text-center">
            Electrical & Maintanace
          </p>
          <p className="font-semibold text-xs text-greyish text-center">
            House, Office
          </p>
        </div>
        <div className="p-5 border-[#D2D2D2] border-[1px] h-[45vh] shadow-lg">
          <div className=" h-[80%] w-full bg-whiiteish mb-4 text-center">
            project pic
          </div>
          <p className="font-bold text-base text-darkblue text-center">
            Industry machine issue
          </p>
          <p className="font-semibold text-xs text-greyish text-center">
            House, Office
          </p>
        </div>
        <div className="p-5 border-[#D2D2D2] border-[1px] h-[45vh] shadow-lg">
          <div className=" h-[80%] w-full bg-whiiteish mb-4 text-center">
            project pic
          </div>
          <p className="font-bold text-base text-darkblue text-center">
            Car Repair & Maintanance
          </p>
          <p className="font-semibold text-xs text-greyish text-center">
            House, Office
          </p>
        </div>
        <div className="p-5 border-[#D2D2D2] border-[1px] h-[45vh] shadow-lg">
          <div className=" h-[80%] w-full bg-whiiteish mb-4 text-center">
            project pic
          </div>
          <p className="font-bold text-base text-darkblue text-center">
            Interior/Exterior Services
          </p>
          <p className="font-semibold text-xs text-greyish text-center">
            House, Office
          </p>
        </div>
        <div className="p-5 border-[#D2D2D2] border-[1px] h-[45vh] shadow-lg">
          <div className=" h-[80%] w-full bg-whiiteish mb-4 text-center">
            project pic
          </div>
          <p className="font-bold text-base text-darkblue text-center">
            Building installation
          </p>
          <p className="font-semibold text-xs text-greyish text-center">
            House, Office
          </p>
        </div>
        <div className="p-5 border-[#D2D2D2] border-[1px] h-[45vh] shadow-lg">
          <div className=" h-[80%] w-full bg-whiiteish mb-4 text-center">
            project pic
          </div>
          <p className="font-bold text-base text-darkblue text-center">
            Electrical Installation
          </p>
          <p className="font-semibold text-xs text-greyish text-center">
            House, Office
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
