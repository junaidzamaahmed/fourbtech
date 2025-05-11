"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  href:
    | string
    | {
        pathname: string;
        query?: { [key: string]: string | string[] };
        hash?: string;
      };
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({
  href,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  async function handleNavigation(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();

    const body = document.body;

    body.classList.add("exit-animation");
    await new Promise((res) => setTimeout(res, 1000));
    body.classList.remove("exit-animation");

    router.push(
      typeof href == "string" ? href : href.pathname + `#${href.hash}`,
    );
    body.classList.add("enter-animation");
    setTimeout(() => {
      body.classList.remove("enter-animation");
    }, 2000);
  }

  return (
    <Link onClick={handleNavigation} href={href} {...props}>
      {children}
    </Link>
  );
}
