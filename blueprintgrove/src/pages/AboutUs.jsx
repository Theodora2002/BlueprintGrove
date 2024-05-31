import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaCircleCheck, FaPenToSquare } from "react-icons/fa6";
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <section id="aboutushero" className="w-full h-[50vh]">
        <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
          <p className=" text-whiiteish text-3xl font-bold">About Us</p>
        </div>
      </section>
      <section className="h-[100vh] w-full mt-20">
        <div className="grid grid-cols-2 gap-[4.5rem] w-4/6 mx-auto">
          <div>
            <p className=" bg-whiiteish text-xs rounded-sm text-darkblue font-semibold w-fit px-2 py-1">
              Welcome to BluePrintGove
            </p>
            <div>
              <h3 className="text-3xl font-extrabold w-[60%] mt-3">
                We’re Commited to Quality
              </h3>
              <p className=" text-greyish text-sm mt-2">
                Proactively envisined multimeda based exptis and cross media
                growth strategies seamlessly visualized quality a intellectual
                capitals withouts superiors collaboration ideas sharing
                holistically pontificated installed base portals after
                maintainable products.
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 text-darkblue mt-6 mb-3 text-sm">
              <p className="mb-4 flex">
                <FaCircleCheck className="w-5 h-5 text-orangeyellow rounded-full mr-3" />
                We Provide 24/7 Service
              </p>
              <p className="mb-4 flex">
                <FaCircleCheck className="w-5 h-5 text-orangeyellow rounded-full mr-3  " />
                Greate technology
              </p>
              <p className="mb-4 flex">
                <FaCircleCheck className="w-5 h-5 text-orangeyellow rounded-full mr-3 " />
                Qualified Agents
              </p>
              <p className="mb-4 flex">
                <FaCircleCheck className="w-5 h-5 text-orangeyellow rounded-full mr-3 " />
                35 Years Exprerience
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="w-full h-full bg-whiiteish"></div>
          </div>
        </div>
        <div className="flex flex-row gap-5 w-4/6 mx-auto mt-6">
          <div className=" bg-whiiteish p-4 w-[25%] text-center">
            {/* ICON */}
            <p className="text-lg font-bold">1920</p>
            <p className="text-xs font-semibold">Projects Completed</p>
          </div>
          <div className=" bg-whiiteish p-4 w-[25%] text-center">
            {/* ICON */}
            <p className="text-lg font-bold">2500+</p>
            <p className="text-xs font-semibold">Industry Solutions</p>
          </div>
          <div className=" bg-whiiteish p-4 w-[25%] text-center">
            {/* ICON */}
            <p className="text-lg font-bold">500+</p>
            <p className="text-xs font-semibold">Expart Contractors</p>
          </div>
          <div className=" bg-whiiteish p-4 w-[25%] text-center">
            {/* ICON */}
            <p className="text-lg font-bold">1K+</p>
            <p className="text-xs font-semibold">Happy Customers</p>
          </div>
        </div>
      </section>
      <section className="w-full  bg-whiiteish">
        <div className="w-4/6 mx-auto grid grid-cols-2 gap-5 py-[10%] h-[80%]">
          <div className=" text-greyish">
            <p className=" bg-[#ffffff] text-xs rounded-sm text-darkblue font-semibold w-fit px-2 py-1">
              Welcome to BluePrintGove
            </p>
            <h3 className=" text-darkblue text-3xl font-bold mt-2">
              Let’s Build Something
              <br /> Creative Together
            </h3>
            <p className=" text-sm my-4">
              Phosfluorescently engaged worldwides methodologies with web
              enabled technology pursure interactively coordinates proactive
              commerce via process
            </p>
            <div>
              <div className="flex flex-row gap-2 text-darkblue items-center">
                <FaCircleCheck className=" text-orangeyellow" />
                <h4 className="font-semibold">35 Years Experience</h4>
              </div>
              <p className="text-xs px-5">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </p>
            </div>
            <div className="mt-4">
              <div className="flex flex-row gap-2  text-darkblue items-center">
                <FaCircleCheck className=" text-orangeyellow" />
                <h4 className="font-semibold">Exellence Certificate</h4>
              </div>
              <p className="text-xs px-5">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </p>
            </div>
          </div>
          <div className=" border-l-2 border-l-orangeyellow border-dashed grid grid-rows-3 py-5 px-6 gap-8">
            <div className=" bg-[#ffffff] p-4 relative">
              <p className=" bg-darkblue py-1 px-5 text-orangeyellow absolute -top-3 z-10 text-xs">
                2022
              </p>
              <p className=" text-greyish font-light text-sm">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium{" "}
              </p>
            </div>
            <div className=" bg-[#ffffff] p-4 relative">
              <p className=" bg-darkblue py-1 px-5 text-orangeyellow absolute -top-3 z-10 text-xs">
                2020
              </p>
              <p className=" text-greyish font-light text-sm">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium{" "}
              </p>
            </div>
            <div className=" bg-[#ffffff] p-4 relative">
              <p className=" bg-darkblue py-1 px-5 text-orangeyellow absolute -top-3 z-10 text-xs">
                2015
              </p>
              <p className=" text-greyish font-light text-sm">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-4/6 mx-auto py-[10%] h-[80%]">
          <div className="flex flex-col items-center">
            <p className=" bg-whiiteish text-xs rounded-sm text-darkblue font-semibold w-fit px-2 py-1 mb-3">
              <FaPenToSquare className=" inline " />
              Our Team
            </p>
            <div>
              <h1 className="font-bold text-3xl text-center mb-3">
                Meet Our Experts
              </h1>
              <p className="text-xs text-center mb-4">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi.
                <br /> In sed pretium metus. Proin pretium id urna sit amet
                tincidunt.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border-greyish border-[1px]">
                <p className="w-[330px] h-[340px] ">pic</p>
                <p className="text-center font-bold text-lg">David James</p>
                <p className="text-center text-xs">Engineer</p>
              </div>
              <div className="p-4  border-greyish border-[1px]">
                <p className="w-[330px] h-[340px]">pic</p>
                <p className="text-center font-bold text-lg">David James</p>
                <p className="text-center text-xs">Engineer</p>
              </div>
              <div className="p-4 border-greyish border-[1px]">
                <p className="w-[330px] h-[340px]">pic</p>
                <p className="text-center font-bold text-lg">David James</p>
                <p className="text-center text-xs">Engineer</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
