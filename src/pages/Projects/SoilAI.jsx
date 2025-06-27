import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useLenis } from '../../hooks/useLenis';
import { Link } from "react-router-dom"; // pastikan sudah di-import
import CustomAnimatedSeparator from "../../components/CustomAnimatedSeparator";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};  

const SoilAI = () => {
  useLenis();
  const containerRef = useRef(null);

  return (
    <>
    <motion.section
      ref={containerRef}
      className="relative z-10 bg-[#fffbee] text-black font-mori flex items-start justify-end"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >

        {/* Tombol Back */}
        
        <div className="fixed left-5 md:ml-10 top-4 md:top-1/2 md:-translate-y-1/2 z-50">
            <Link
                to="/projects"
                className="bg-black text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition text-xl"
                aria-label="Back"
            >
                ←
            </Link>
        </div>

        {/* Tombol kanan Folder */}
        <div className="fixed md:mr-10 right-4 top-4 md:top-1/2 md:-translate-y-1/2 z-50">
        <a
            href="https://drive.google.com/file/d/1qe2owgFXUvrbDdM-JDQTkKQPO7LwVS1v/view?usp=sharing" // ganti dengan link folder Google Drive kamu
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white w-14 h-14 rounded-full shadow-md hover:bg-gray-800 transition flex items-center justify-center"
            aria-label="Drive Folder Link"
        >
            {/* Ikon Folder */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 md:w-7 md:h-7"
            >
            <path d="M10 4H4a2 2 0 00-2 2v2h20V8a2 2 0 00-2-2h-8l-2-2z" />
            <path d="M22 10H2v8a2 2 0 002 2h16a2 2 0 002-2v-8z" />
            </svg>
        </a>
        </div>




        {/* Parent */}
        <motion.article
            className="w-[98vw] min-h-screen max-w-screen-xl mx-auto py-20 flex flex-col items-center"
            variants={staggerContainer}
        >

            {/* Judul */}
            <motion.div variants={fadeInUp} className="w-11/12 md:w-9/12 text-left">
                <h1 className="text-4xl font-semibold">SoilAI (Project)</h1>
            </motion.div>

            <div className="w-11/12 md:w-9/12">
                <CustomAnimatedSeparator mb={8} h={1} mx={0} />
            </div>

            {/* Info */}

            <motion.div
            variants={fadeInUp}
            className="grid gap-6 w-11/12 md:w-9/12 grid-cols-1 md:grid-cols-6 text-lg"
            >
                {/* Kiri: Detail Info */}
                <div className="md:col-span-2 flex flex-col gap-2">
                    <div className="flex items-center">
                    <span className="bg-black  px-4 py-1 rounded-full text-white text-l md:text-xl mr-4 md:mr-6 mb-2">Date</span>
                    <p className="text-l font-semibold md:text-xl">2025</p>
                    </div>

                    <div className="flex items-center">
                    <span className="bg-black  px-4 py-1 rounded-full text-white text-l md:text-xl mr-4 md:mr-6">Type</span>
                    <p className="text-l font-semibold md:text-xl">Machine Learning</p>
                    </div>
                </div>

                {/* Kanan: Deskripsi */}
                <div className="md:col-span-4 text-sm md:text-xl font-normal md:font-thin">
                    <p>
                    SoilAI is a research-based project that explores the integration of Artificial Intelligence in analyzing soil health and characteristics. The system is designed to assist farmers, researchers, and agricultural stakeholders in making data-driven decisions by automating the identification of soil conditions through image recognition and sensor data.
                    The proposed solution leverages AI algorithms—such as machine learning and deep learning—to classify soil types, predict nutrient levels, and detect early signs of degradation or imbalance. Data is collected through IoT-based soil sensors and/or mobile imaging, which are then processed to generate real-time insights and recommendations for optimal crop planning and sustainable land management.

                    </p>
                </div>
            </motion.div>


             <div className="w-11/12 md:w-9/12">
                <CustomAnimatedSeparator my={8} h={1} mx={0} />
            </div>

            {/* Info 2 (gambar) */}

            <motion.div variants={fadeInUp} className="w-11/12 md:w-9/12 text-left space-y-10">
                <div className="w-11/12 md:w-9/12 items-start flex gap-3">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <title>asterisk</title>
                        <path d="M1.728 20.992q-0.416 1.6 0.416 3.008 0.832 1.44 2.432 1.856t3.040-0.384q0.832-0.48 2.56-1.92t3.168-2.912q-0.608 2.016-0.96 4.192t-0.384 3.168q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848q0-0.96-0.384-3.168t-0.928-4.192q1.44 1.504 3.168 2.944t2.528 1.888q1.44 0.832 3.040 0.384t2.432-1.856 0.416-3.008-1.888-2.464q-0.864-0.48-2.944-1.248t-4.064-1.28q2.016-0.512 4.096-1.28t2.912-1.248q1.44-0.832 1.888-2.432t-0.416-3.040q-0.832-1.44-2.432-1.856t-3.040 0.384q-0.832 0.512-2.528 1.92t-3.168 2.912q0.576-1.984 0.928-4.192t0.384-3.168q0-1.632-1.184-2.816t-2.816-1.184-2.816 1.184-1.184 2.816q0 0.992 0.384 3.168t0.96 4.192q-1.44-1.472-3.168-2.88t-2.56-1.952q-1.44-0.8-3.040-0.384t-2.432 1.856-0.416 3.040 1.888 2.432q0.832 0.48 2.912 1.248t4.128 1.28q-2.016 0.512-4.096 1.28t-2.944 1.248q-1.44 0.832-1.888 2.464z" />
                    </svg>
                    <h1 className="text-2xl font-semibold">Project Preview</h1>
                </div>

                <div className="flex justify-center items-center">
                    <img src="/photos/soilai/1.png" className="rounded-2xl shadow-2xl" alt="soilai" />
                </div>
            </motion.div>
            
        </motion.article>
    </motion.section>
    </>
  );
};

export default SoilAI;
