
export default function Homepagecomp() {
  return (
    <section className="bg-[#ffffff] h-[50vh] w-full pt-20 mb-32">
      <div className="w-[65%] mx-auto my-auto grid grid-cols-2 gap-10">
        <div id="bruuh"></div>
        <div>
          <p className=" bg-whiiteish text-xs rounded-sm text-darkblue font-semibold w-fit px-2 py-1">
            Welcome to BluePrintGove
          </p>
          <h3 className="mt- text-2xl text-darkblue font-bold my-2">
            We Provide Your Future
          </h3>
          <p className="text-xs text-greyish mb-3 text-justify">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt. Interdum et malesuada.{" "}
          </p>
          <p className="text-xs text-greyish text-justify">
            In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean sed
            quam tristique, facilisis est ac, interdum velit
          </p>
          <div className="grid grid-cols-[1fr,3fr] gap-5 mt-3">
            <div className=" bg-whiiteish p-3">
              <p>
                <span className="block text-5xl font-bold text-orangeyellow text-center">
                  35
                </span>{" "}
                <span className=" block text-darkblue text-sm font-bold text-center">
                  Years of<br></br> Experience
                </span>
              </p>
            </div>
            <div>
              <ul className="text-xs text-greyish ">
                <li className="mb-2">- Sed varius ipsum lacu</li>
                <li className="mb-2">- Pulvinar tortor dignissim sit amet</li>
                <li className="mb-2">- Quisque tristique diam quis placera</li>
                <li className="mb-2">- Aliquam id ante suscipi fringilla</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
