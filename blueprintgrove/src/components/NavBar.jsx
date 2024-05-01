import { FaXTwitter, FaFacebook, FaInstagram, FaLocationDot } from "react-icons/fa6";
export default function NavBar() {
  return (
    <nav className="w-full">
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
      <section>
        <div></div>
        <div></div>
      </section>
    </nav>
  );
}
