/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.4 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const navigation = ["Home", "Proyek", "Kontak"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
        Fariz Fadliansyah
      </motion.div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className="nav-links desktop">
        {navigation.map((text, index) => (
          <motion.li
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <a href={`#${text}`}>{text}</a>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="nav-links mobile"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit">
            {navigation.map((text, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <a onClick={() => setIsMenuOpen(false)}>{text}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
