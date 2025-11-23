/** @format */

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const Hero = () => {
  return (
    <motion.section
      id="Home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate">
          <motion.div className="hero-badge">
            <span>👋Halo, Saya</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}>
            Fariz
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Mahasiswa Teknik Informatika
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Seorang Mahasiswa dengan keahlian pengembangan web fullstack yang
            mencakup frontend, backend, dan integrasi basis data.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#Proyek"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Lihat Karyaku
            </motion.a>
            <motion.a
              href="#Kontak"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Hubungi Saya
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Fariz-ai" target="_blank">
              <i className="fab fa-github" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/fariz-fadliansyah"
              target="_blank">
              <i className="fab fa-linkedin" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/farizfdlnsyh"
              target="_blank">
              <i className="fab fa-instagram" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="code-display">
            <SyntaxHighlighter
              language="javascript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}>
              {`const tentangSaya = {
  nama: "Fariz Fadliansyah",
  alamat: "Jalan Petamburan 1 No. 7, Tanah Abang, Jakarta Pusat",
  role: "Mahasiswa Teknik Informatika",
  stack: {
    bahasaPemrograman: ["JavaScript", "Java", "PHP", "Python"],
    database: ["SQL", "NoSQL"]
    framework: ["Next.js", "React.js", "Express.js", "TailwindCSS"]
  }
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">Let's work together!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
