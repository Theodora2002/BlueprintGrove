import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-darkblue" id="footer">
    <NewsletterForm />
      <section className=" text-whiiteish">
        <section id="footer-repeat">
          <div>
            <a href="">
              <h1 className="text-whiiteish text-2xl">
                BluePr
                <span className=" text-orangeyellow">intGr</span>ove
              </h1>
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
            <div className="flex flex-row ">
              <div className="rounded-full bg-orangeyellow p-4">
                <FaLocationDot className="w-4 h-4" />
              </div>
              <div className="ml-2">
                <h3>Location</h3>
                <p>Amsterdam, 109-74</p>
              </div>
            </div>
          </div>
        </section>
        <section id="segments">
          <div className="flex flex-col justify-between">
            <p className=" text-whiiteish text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              voluptatibus, quisquam unde eius explicabo aliquam dignissimos id
            </p>
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
                <FaLocationDot className=" w-4 h-4" />
              </a>
            </div>
          </div>
          <div
            id="links"
            className="grid grid-cols-2 px-7 border-x-[1px] border-x-greyish"
          >
            <ul className=" text-whiiteish flex flex-col">
              <h4 className="font-bold">Explore</h4>
              <a href="">About Us</a>
              <a href="">Gallery</a>
              <a href="">Offers</a>
              <a href="">Pricing</a>
              <a href="">FAQ</a>
            </ul>
            <ul className=" text-whiiteish flex flex-col">
              <h4 className="font-bold">Quick Links</h4>
              <a href="">Services</a>
              <a href="">Blog</a>
              <a href="">Contact Us</a>
              <a href="">Service Request</a>
              <a href="">Estimation Calculator</a>
            </ul>
          </div>
          {/* there are some additions that need to be made here */}
          <div>
            <ul className=" text-whiiteish flex flex-col">
              <h4 className="font-bold">Quick Links</h4>
              <a href="">Services</a>
              <a href="">Blog</a>
              <a href="">Contact Us</a>
              <a href="">Service Request</a>
              <a href="">Estimation Calculator</a>
            </ul>
          </div>
        </section>
        <p className="text-xs my-2 text-center">
          Copyright © BluePrintGrove | Designed and Developed by TheGoons™ |
          Powered by Vite + React
        </p>
      </section>
    </footer>
  );
}
