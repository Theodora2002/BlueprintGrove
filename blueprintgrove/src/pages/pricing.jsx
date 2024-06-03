import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FaPenToSquare, FaCircleCheck } from "react-icons/fa6";

export default function Pricing() {
  return (
    <>
      <NavBar />
      <section id="pricinghero" className="w-full h-[40vh]">
        <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
          <p className=" text-whiiteish text-3xl font-bold">Pricing</p>
        </div>
      </section>
      <section className=" py-28 bg-whiiteish">
        <div className="w-4/6 mx-auto">
          <div className="grid grid-cols-2 mb-10">
            <div>
              <p className=" bg-[#ffffff] text-xs rounded-sm text-darkblue font-semibold w-fit px-3 py-2 mb-3">
                <FaPenToSquare className=" inline mr-1 my-auto" />
                Subcriptions
              </p>
              <p className=" text-4xl font-bold">
                Let’s Customize Work
                <br /> With Affordable Price
              </p>
            </div>
            <p className=" text-sm text-greyish w-fit h-fit text-justify my-auto">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 mb-10">
            <div className="bg-[#ffffff] p-8 shadow-lg">
              <div className="grid grid-cols-2 border-b-[1px] border-b-[#D7D7D7] pb-4">
                <p className=" font-bold text-darkblue text-xl">
                  <span>Basic Plan</span>
                  <br />
                  <span>$ 599.00</span>
                </p>
                <p className="text-xs h-fit my-auto text-end text-greyish">
                  Per visit charge
                </p>
              </div>
              <div className=" text-greyish text-sm ">
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Electrical Service
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Distribution Power Systems
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  High & Medium Voltages
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Industrial Control Systems
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Switch Installation
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Generator Installations
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Innovative Construction
                </p>
              </div>
              <button className="mx-auto w-full bg-orangeyellow py-2 font-bold mt-5 hover:bg-[#ffffff] hover:border-[1px] hover:border-orangeyellow hover:text-sm">
                Buy Now
              </button>
            </div>
            <div className="bg-[#ffffff] p-8 shadow-lg ">
              <div className="grid grid-cols-2 border-b-[1px] border-b-[#D7D7D7] pb-4">
                <p className=" font-bold text-darkblue text-xl">
                  <span>Standard</span>
                  <br />
                  <span>$ 699.00</span>
                </p>
                <p className="text-xs h-fit my-auto text-end text-greyish">
                  <p className=" bg-orangeyellow px-2 py-1 w-fit ml-[2.5rem] text-darkblue font-bold">
                    POPULAR
                  </p>
                  Per visit charge
                </p>
              </div>
              <div className=" text-greyish text-sm ">
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  PLC Controls
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Conveyor systems
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Wiring enivations
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Electric Water Heater Repair
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Service And Panel Upgrades
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Efficient Lighting Solutions
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Site lighting
                </p>
              </div>
              <button className="mx-auto w-full bg-orangeyellow py-2 font-bold mt-5 hover:bg-[#ffffff] hover:border-[1px] hover:border-orangeyellow hover:text-sm">
                Buy Now
              </button>
            </div>
            <div className="bg-[#ffffff] p-8 shadow-lg">
              <div className="grid grid-cols-2 border-b-[1px] border-b-[#D7D7D7] pb-4">
                <p className=" font-bold text-darkblue text-xl">
                  <span>Professional</span>
                  <br />
                  <span>$ 799.00</span>
                </p>
                <p className="text-xs h-fit my-auto text-end text-greyish">
                  Per visit charge
                </p>
              </div>
              <div className=" text-greyish text-sm ">
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Cable Tray Installations
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Wiring Upgrades
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Energy Efficient Lighting
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Emergency Generating
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Pools And Hot Tubs
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Air Conditioning Units
                </p>
                <p className="mt-4">
                  <FaCircleCheck className="inline mr-2 text-orangeyellow" />
                  Generating Systems
                </p>
              </div>
              <button className="mx-auto w-full bg-orangeyellow py-2 font-bold mt-5 hover:bg-[#ffffff] hover:border-[1px] hover:border-orangeyellow hover:text-sm">
                Buy Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className=" text-darkblue font-bold text-base">
                <FaCircleCheck className="inline text-orangeyellow mr-3" />
                Afordable pice
              </p>
              <p className=" text-justify pl-6 text-greyish text-sm mt-1">
                lacinia, tempor lacus at, eleifend diam. Maecenas tempus
                tincidunt placeratneque, maximus mattis
              </p>
            </div>
            <div>
              <p className=" text-darkblue font-bold text-base">
                <FaCircleCheck className="inline text-orangeyellow mr-3" />
                Fixed Plan
              </p>
              <p className=" text-justify pl-6 text-greyish text-sm mt-1">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full bg-[#ffffff]">
        <div className=" w-4/6 mx-auto "></div>
      </section>
      <Footer />
    </>
  );
}
