import clsx from "clsx";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({
  text,
  outline,
  customCLass = "none",
  href = "/",
  rightIcon = false,
  leftIcon = false,
}: {
  text: string;
  outline: boolean;
  customCLass?: string;
  href: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "group border-[2px] duration-300 flex cursor-pointer items-center justify-center rounded-full py-1 pr-3 pl-1 transition-all",
        outline
          ? "text-h1-color bg-transparent"
          : "bg-accent-hover text-custom-white",
        customCLass,
      )}
    >
      {leftIcon && (
        <div className="-rotate-45 transition-all duration-300 group-hover:rotate-0">
          <IoIosArrowRoundForward className="max-sm:size-5 sm:size-10"  />
        </div>
      )}
      <p className={clsx("font-normal uppercase")}>{text}</p>
      {rightIcon && (
        <div className="-rotate-45 transition-all duration-300 group-hover:rotate-0">
          <IoIosArrowRoundForward className="max-sm:size-5 sm:size-10" />
        </div>
      )}
    </Link>
  );
};

export default Button;
