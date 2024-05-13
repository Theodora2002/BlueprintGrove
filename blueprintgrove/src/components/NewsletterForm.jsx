export default function NewsletterForm() {
  return (
    <form className="w-full flex flex-row justify-between items-center bg-orangeyellow text-darkblue px-[15%] h-[25vh]">
      <div><p className="text-3xl font-bold">Subcribe Our Newsletter</p>
      <p className="text-xs"><span className="font-bold">Stay in touch with us to get latest news</span>.blah blah blah</p></div>
      <div className="bg-whiiteish w-[40%] h-10 p-[2px] text-sm flex flex-row">
        <input type="text" placeholder="Your mail address here" className=" p-4 bg-orangeyellow h-full text-darkblue focus:outline-none w-full placeholder:text-darkblue" />
        <input type="submit" value="Subcribe" className="h-full w-[35%] px-5 font-semibold " />
      </div>
    </form>
  );
}
