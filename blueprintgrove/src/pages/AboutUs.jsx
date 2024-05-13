import NavBar from "../components/NavBar";
import image from "../assets/img.png";
import Footer from "../components/Footer";
import { FaCircleCheck } from "react-icons/fa6";
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <section id="aboutushero" className="w-full h-[50vh]">
        <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
          <p className=" text-whiiteish text-3xl font-bold">About Us</p>
        </div>
      </section>
      <section className="h-[100vh] w-full">
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
            <img
              src={image}
              className="w-full h-full"
              alt="image of personel"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 w-4/6 mx-auto mt-6">
          <div className=" bg-greyish p-4 w-[25%] ">
            {/* ICON */}
            <p>NUmber</p>
            <p>Description</p>
          </div>
          <div className=" bg-greyish p-4 w-[25%] "></div>
          <div className=" bg-greyish p-4 w-[25%] "></div>
          <div className=" bg-greyish p-4 w-[25%] "></div>
        </div>
      </section>
      <section className="w-full  bg-whiiteish">
        <div className="w-4/6 mx-auto grid grid-cols-2 gap-5 py-[10%] h-[80%]">
          <div className="">
            <p className=" bg-[#ffffff] text-xs rounded-sm text-darkblue font-semibold w-fit px-2 py-1">
              Welcome to BluePrintGove
            </p>
            <h3>Let’s Build Something Creative Together</h3>
            <p>
              Phosfluorescently engaged worldwides methodologies with web
              enabled technology pursure interactively coordinates proactive
              commerce via process
            </p>
            <div>
              <div>
                <FaCircleCheck />
                <h4></h4>
              </div>
              <p></p>
            </div>
            <div>
              <div>
                <FaCircleCheck />
                <h4></h4>
              </div>
              <p></p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
