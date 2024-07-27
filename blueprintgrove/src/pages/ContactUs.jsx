import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Small from "../components/Small";
import Hero from "../components/hero";

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <Hero hero="ContactUs" idl="contacthero" />
      <section>
        <div className="w-4/6 mx-auto ">
          <Small text="Quick Contact" styling=" ml-[44%]" />
          <p className="text-center text-2xl text-darkblue font-bold">
            Contact Details
          </p>
          <p className="text-sm text-center text-greyish">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi.<br/> In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </p>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-whiiteish">
        <div className="w-4/6 mx-auto ">
          <Small text="Contact Us" styling=" ml-[45%]" />
          <h1 className="text-center text-2xl text-darkblue font-bold ">
            Get In Touch
          </h1>
          <form action="" className="w-full mt-5" id="contactUsForm">
            <div className="grid grid-cols-2 grid-rows-2 gap-5 mb-5">
              <input type="text" className="h-10" placeholder="Name" />
              <input type="email" className="h-10" placeholder="Your Email" />
              <input type="tel" className="h-10" placeholder="Phone Number" />
              <input type="url" className="h-10" placeholder="Website" />
            </div>
            <input
              type="text"
              className="w-full mb-5 h-10"
              placeholder="Subject"
            />
            <textarea className=" w-full text-sm px-4 py-4 h-[30%] mb-5" name="paragraph_text" cols="50" rows="10" placeholder="Your Message"></textarea>

            <input type="submit" value="Submit" id="SubmitBt" />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
