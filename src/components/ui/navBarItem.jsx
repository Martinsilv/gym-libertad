import { motion } from "framer-motion";
import "../../fonts/bebasFont.css"; // Import your CSS file for custom fonts

export const NavItem = ({ children, delay = 0, onClick }) => {
  return (
    <motion.li
      initial={{ rotateX: -80, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ fontFamily: '"Bebas Neue", sans-serif' }}
      className="text-4xl text-white cursor-pointer hover:text-red-400 transition-colors duration-200 "
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
};
