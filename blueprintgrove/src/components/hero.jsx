
export default function Hero(props) {
  return (
    <section id={props.idl} className="w-full h-[40vh]">
      <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
        <p className=" text-whiiteish text-3xl font-bold">{props.hero}</p>
      </div>
    </section>
  );
}
