import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ y: 0, opacity: 1 });
      console.log("in view");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={mainControls}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
