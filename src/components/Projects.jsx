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
            window.open("https://event-planner-4tdl.vercel.app", "_blank")
          }
          style={{ cursor: "pointer" }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/eventplanner.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Event Planner</h3>
          <p>
            Website untuk membuat dan mengelola event dengan sistem RSVP tanpa perlu
            tamu membuat akun. Pengguna dapat membuat event, membagikan link
            undangan unik, serta memantau jumlah konfirmasi kehadiran
            (Going/Maybe/Not Going) secara real-time melalui dashboard yang
            interaktif.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>Prisma</span>
            <span>Shadcn</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("http://spk-film-impor.full.diskon.cloud", "_blank")
          }
          style={{ cursor: "pointer" }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/spk.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Sistem Pendukung Keputusan</h3>
          <p>
            Sistem Pendukung Keputusan (SPK) berbasis web yang menerapkan metode
            Simple Additive Weighting (SAW) untuk mengevaluasi dan menentukan
            peringkat film-film impor.
          </p>
          <div className="project-tech">
            <span>PHP</span>
            <span>MySQL</span>
            <span>Bootstrap</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open(
              "https://crypto-tracker-seven-sigma-34.vercel.app",
              "_blank",
            )
          }
          style={{ cursor: "pointer" }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/cryptotracker.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Crypto Tracker</h3>
          <p>
            Aplikasi pelacak cryptocurrency real-time yang menampilkan harga
            live, data pasar, dan grafik harga 7 hari untuk cryptocurrency
            teratas menggunakan CoinGecko API.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>React Router</span>
            <span>CoinGecko API</span>
          </div>
        </motion.div>

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
