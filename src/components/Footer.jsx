/** @format */

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <p>
        &copy; {currentYear} Portofolio Fariz Fadliansyah. Seluruh hak cipta
        dilindungi.
      </p>
    </motion.footer>
  );
};

export default Footer;
