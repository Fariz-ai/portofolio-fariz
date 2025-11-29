/** @format */

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const Projects = () => {
  return (
    <motion.section
      id="Proyek"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}>
        Proyek Saya
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://memory-card-delta-livid.vercel.app", "_blank")
          }
          style={{ cursor: "pointer" }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/memorycard.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Memory Card</h3>
          <p>
            Game Memory Card interaktif yang dibangun dengan React. Menampilkan
            kartu emoji yang harus dicocokkan pemain dengan mengingat posisinya.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Vite</span>
            <span>CSS3</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://gdesign-pi.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/gdesign.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>GDesign</h3>
          <p>
            Website profil perusahaan yang responsif dengan React.js sebagai
            platform untuk menampilkan layanan, portofolio, dan informasi
            perusahaan.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>DaisyUI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
