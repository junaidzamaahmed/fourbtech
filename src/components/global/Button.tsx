import clsx from "clsx";
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({
  text,
  outline,
  customCLass = "none",
}: {
  text: string;
  outline: boolean;
  customCLass: string;
}) => {
  return (
    <button
      className={clsx(
        "group flex cursor-pointer items-center justify-center rounded-full pl-1 pr-3 py-1 ",
        outline
        ? "text-h1-color border-[2px] bg-transparent"
        : "bg-accent-hover text-custom-white",
        customCLass,
      )}
    >
      <div className="-rotate-45 transition-all duration-500 group-hover:rotate-0">
        <IoIosArrowRoundForward size={30} />
      </div>
      <p className={clsx("font-normal uppercase")}>{text}</p>
    </button>
  );
};

export default Button;
