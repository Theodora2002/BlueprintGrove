import { FaIndustry, FaCity, FaHouse } from "react-icons/fa6";

export default function Professerv() {
  return (
    <section id="servicessss" className="w-full h-[80vh]">
      <div className="w-full bg-orangeyellow h-[80%]">
        <div className="pt-24">
          <p className=" text-darkblue text-2xl font-bold text-center mb-4">
            Professional Main Services
          </p>
          <p className="text-darkblue text-xs text-center mb-4">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In<br></br> sed pretium metus. Proin pretium id urna sit
            amet tincidunt.
          </p>
          <div className="w-fit mx-auto flex flex-row gap-8 servicebts">
            <button>
              <FaCity className="w-4 h-4 inline" />
              <p className="inline pl-2">Commercial</p>
            </button>
            <button>
              <FaHouse className="w-4 h-4 inline" />
              <p className="inline pl-2">Residential</p>
            </button>
            <button>
              <FaIndustry className="w-4 h-4 inline" />
              <p className="inline pl-2">Industrial</p>
            </button>
          </div>
          <div className="w-[65%] bg-whiiteish mx-auto mt-10">w</div>
        </div>
      </div>
    </section>
  );
}
