import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import PricingAd from "../components/pricingAd";

export default function Pricing() {
  const plans = [
    {
      title: "Basic Plan",
      price: "$599.00",
      services: [
        { name: "Electrical Service Repairs, Upgrades", included: true },
        { name: "Distribution Power Systems", included: true },
        { name: "High & Medium Voltage Substations", included: true },
        { name: "Switch Installation", included: true },
        { name: "Industrial Control Systems", included: true },
        { name: "Generator Installations", included: true },
        { name: "Innovative Construction Alternatives", included: false },
        { name: "PLC Controls", included: false },
        { name: "Conveyor Systems", included: true },
        { name: "Wiring Renovations", included: true },
      ],
    },
    {
      title: "Standard",
      price: "$699.00",
      services: [
        { name: "Electrical Service Repairs, Upgrades", included: true },
        { name: "Distribution Power Systems", included: true },
        { name: "High & Medium Voltage Substations", included: true },
        { name: "Switch Installation", included: true },
        { name: "Industrial Control Systems", included: true },
        { name: "Generator Installations", included: true },
        { name: "Innovative Construction Alternatives", included: false },
        { name: "PLC Controls", included: false },
        { name: "Conveyor Systems", included: true },
        { name: "Wiring Renovations", included: true },
      ],
    },
    {
      title: "Professional",
      price: "$799.00",
      services: [
        { name: "Electrical Service Repairs, Upgrades", included: true },
        { name: "Distribution Power Systems", included: true },
        { name: "High & Medium Voltage Substations", included: true },
        { name: "Switch Installation", included: true },
        { name: "Industrial Control Systems", included: true },
        { name: "Generator Installations", included: true },
        { name: "Innovative Construction Alternatives", included: true },
        { name: "PLC Controls", included: true },
        { name: "Conveyor Systems", included: true },
        { name: "Wiring Renovations", included: true },
      ],
    },
  ];
  return (
    <>
      <NavBar />
      <section id="pricinghero" className="w-full h-[40vh]">
        <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
          <p className=" text-whiiteish text-3xl font-bold">Pricing</p>
        </div>
      </section>
      <PricingAd />
      <section className=" w-full bg-[#ffffff]">
        <div className=" w-4/6 mx-auto my-32">
          <p className="text-darkblue text-2xl font-bold text-center mb-4">
            Our Packages
          </p>
          <p className=" text-greyish text-xs text-center mb-4">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In
            <br /> sed pretium metus. Proin pretium id urna sit amet tincidunt.
          </p>
          <div className="w-fit mx-auto mb-6">
            <button className="px-4 py-2 bg-whiiteish text-xs text-darkblue border-orangeyellow border-[1px] ">
              Monthly
            </button>
            <button className="px-4 py-2 bg-orangeyellow text-xs text-darkblue border-orangeyellow border-[1px] ">
              Annually
            </button>
          </div>
          <div className="pricing-table bg-whiiteish pl-10 pb-8">
            <h2 className="ml-[60%] text-xs font-bold bg-orangeyellow text-center w-[20%] py-1">POPULAR</h2>
            <div className="table-header">
              <div className="w-[40%]">
                <p className="text-lg font-bold">Services</p>
              </div>
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className="plan-header w-[20%] text-center"
                >
                  <h3 className="text-base font-bold">{plan.title}</h3>
                  <p>
                    {plan.price} <br /> Per Visit Charge
                  </p>
                </div>
              ))}
            </div>
            <div className="table-body ">
              {plans[0].services.map((service, index) => (
                <div
                  key={index}
                  className="service-row border-y-[1.5px] border-[#D7D7D7]"
                >
                  <div className="text-greyish text-xs w-[40%]">
                    {service.name}
                  </div>
                  {plans.map((plan) => (
                    <div key={plan.title} className="plan-cell w-[20%] h-full">
                      {plan.services[index].included ? (
                        <FaCircleCheck className="mx-auto" />
                      ) : (
                        <FaCircleXmark className="mx-auto" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="table-footer">
              <div className="w-[40%] h-full"></div>
              {plans.map((plan) => (
                <button
                  key={plan.title}
                  className="w-[15%] bg-orangeyellow text-darkblue text-xs font-bold mx-auto  py-3 mt-5"
                >
                  Buy Now
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
