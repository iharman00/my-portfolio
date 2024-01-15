import { AnchorHTMLAttributes } from "react";
import { MotionProps, motion } from "framer-motion";

interface Props {
  children: string;
}

const NavLink = ({
  children,
  href,
  ...rest
}: MotionProps & AnchorHTMLAttributes<HTMLAnchorElement & Props>) => {
  return (
    <motion.a
      href={href}
      className="font-poppins font-medium text-2xl uppercase tracking-wide"
      {...rest}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

const Link = ({
  children,
  href,
  ...rest
}: Props & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      className="font-poppins italic font-medium text-base inline-block mt-6 after:content-[''] after:block after:bg-primary after:h-1 after:relative after:bottom-[-0.5rem] after:hover:bottom-[-0.2rem] after:transition-all after:ease-out after:duration-300"
      {...rest}
    >
      {children}
    </a>
  );
};

export { Link, NavLink };
