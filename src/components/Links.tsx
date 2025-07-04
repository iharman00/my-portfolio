import { AnchorHTMLAttributes } from "react";

interface Props {
  children: string;
}

const NavLink = ({
  children,
  href,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement & Props>) => {
  return (
    <a
      href={href}
      className="text-3xl lg:text-xl font-normal capitalize tracking-wide lg:after:block after:bg-primary after:h-1 after:rounded-md after:relative after:bottom-[-0.5rem] after:hover:bottom-[-0.2rem] after:opacity-0 after:hover:opacity-100 after:transition-all after:ease-out after:duration-300"
      {...rest}
    >
      {children}
    </a>
  );
};

const Link = ({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className="font-poppins italic font-medium text-base lg:text-lg inline-block mt-6 lg:mt-8 after:block after:bg-primary after:h-1 after:relative after:bottom-[-0.5rem] after:hover:bottom-[-0.2rem] after:transition-all after:ease-out after:duration-300 after:-z-20"
      {...rest}
    >
      {children}
    </a>
  );
};

export { Link, NavLink };
