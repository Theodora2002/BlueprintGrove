import { FaPenToSquare } from "react-icons/fa6";

export default function Small(props) {
  return (
    <p className={"bg-whiiteish text-xs rounded-sm text-darkblue font-semibold w-fit px-2 py-1 mb-3" + props.styling}>
      <FaPenToSquare className=" inline mr-1" />
      {props.text}
    </p>
  );
}
