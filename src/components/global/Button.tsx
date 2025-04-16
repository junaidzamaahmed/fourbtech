import clsx from "clsx";
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({
  text,
  outline,
  customCLass="none",
}: {
  text: string;
  outline: boolean;
  customCLass: string;
}) => {
  return (
    <button
      className={clsx(
        "group flex justify-center items-center rounded-full  px-5 py-1  cursor-pointer",
        outline
          ? "bg-blue-600 text-white"
          : "bg-transparent text-blue-600 border-[1px]",
        customCLass
      )}
    >
      <div className='-rotate-45 transition-all duration-500 group-hover:rotate-0'>
        <IoIosArrowRoundForward size={30} />
      </div>
      <p className={clsx("font-normal uppercase")}>{text}</p>
    </button>
  );
};

export default Button;
