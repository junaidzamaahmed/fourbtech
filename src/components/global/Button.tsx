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
        "group flex cursor-pointer items-center justify-center rounded-full py-1 pr-3 pl-1 transition-all duration-300",
        outline
          ? "text-h1-color border-[2px] bg-transparent"
          : "bg-accent-hover text-custom-white",
        customCLass,
      )}
    >
      {leftIcon && (
        <div className="-rotate-45 transition-all duration-300 group-hover:rotate-0">
          <IoIosArrowRoundForward size={30} />
        </div>
      )}
      <p className={clsx("font-normal uppercase")}>{text}</p>
      {rightIcon && (
        <div className="-rotate-45 transition-all duration-300 group-hover:rotate-0">
          <IoIosArrowRoundForward size={30} />
        </div>
      )}
    </Link>
  );
};

export default Button;
