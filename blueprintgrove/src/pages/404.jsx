import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function The404() {
  return (
    <>
      <NavBar />
      <section id="aboutushero" className="w-full h-[40vh]">
        <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
          <p className=" text-whiiteish text-3xl font-bold">Page Not Found</p>
        </div>
      </section>
      <section className="py-20">
        <p className="text-center text-[120px] font-bold ">404</p>
        <p className="text-center text-3xl font-bold text-orangeyellow">Oops! That page can’t be found</p>
        <p className="text-center text-xs my-4">
          Sorry, but the page you are looking for does not existing
        </p>
        <Link className="text-xs py-2 px-3 bg-orangeyellow ml-[47%] font-semibold" to="/">Go To Home</Link>
      </section>
      <Footer />
    </>
  );
}
