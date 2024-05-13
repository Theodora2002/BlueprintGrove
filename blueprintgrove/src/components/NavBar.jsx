import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa6";
export default function NavBar() {
  return (
    <nav className="w-full relative">
      <section id="top-nav">
        <div>
          <p>Opening Hours: 06:00 to 20:00</p>
        </div>
        <div id="icons" className="flex flex-row">
          <a href="">
            <FaFacebook className="w-4 h-4" />
          </a>
          <a href="">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="">
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a href="">
            <FaLocationDot className="w-4 h-4" />
          </a>
        </div>
      </section>
      <section id="middle-nav">
        <div>
          <a href="">
            <p className="text-darkblue">
              <span className="text-darkblue">BluePr</span>
              <span className=" text-orangeyellow">intGr</span>ove
            </p>
          </a>
        </div>
        <div id="info-nav" className="flex flex-row gap-5">
          <div className="flex flex-row">
            <div className="rounded-full bg-orangeyellow p-4">
              <FaEnvelope className="w-4 h-4" />
            </div>
            <div className="ml-2">
              <h3>Mail Us</h3>
              <p>info@Example.com</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="rounded-full bg-orangeyellow p-4">
              <FaPhone className="w-4 h-4" />
            </div>
            <div className="ml-2">
              <h3>Call Us</h3>
              <p>+254700000000</p>
            </div>
          </div>
        </div>
      </section>
      <nav id="float-nav" className="absolute bottom-[-40px] left-[16%]">
        <div className="flex">
            <a href="/">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/projects" className="flex">Projects</a>
            <a href="/services">Services</a>
            <a href="">Blog</a>
            <a href="#footer">Contact Us</a>
        </div>
        <a  className="px-3 my-[-10px] bg-darkblue text-whiiteish text-center py-2" href="">Have Any Questions?</a>
      </nav>
    </nav>
  );
}
