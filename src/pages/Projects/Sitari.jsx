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

const Sitari = () => {
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

        {/* Tombol kanan Github */}
        <div className="fixed md:mr-10 right-4 top-4 md:top-1/2 md:-translate-y-1/2 z-50">
            <a
                href="https://github.com/rayhanzz772/system_inventory" // ganti dengan link GitHub kamu
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white w-14 h-14 rounded-full shadow-md hover:bg-gray-800 transition flex items-center justify-center"
                aria-label="GitHub Repository"
            >
                {/* Ikon GitHub */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 md:w-7 md:h-7"
                >
                <path
                    fillRule="evenodd"
                    d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.385c.6.113.82-.26.82-.577v-2.036c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.086 1.838 1.24 1.838 1.24 1.07 1.833 2.806 1.304 3.492.997.107-.776.418-1.305.76-1.604-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.518 11.518 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.921.43.372.814 1.103.814 2.222v3.293c0 .319.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z"
                    clipRule="evenodd"
                />
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
                <h1 className="text-4xl font-semibold">SITARI</h1>
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
                    {[
                        { label: "Date", value: "2024" },
                        { label: "Role", value: "Backend Developer" },
                        { label: "Tech", value: "Laravel" },
                    ].map((item, idx) => (
                        <div className="flex items-center" key={idx}>
                        <span className="bg-black text-white px-4 py-1 rounded-full text-l md:text-xl mb-2 mr-4 md:mr-6 min-w-[90px] text-center">
                            {item.label}
                        </span>
                        <p className="text-l font-semibold md:text-xl">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Kanan: Deskripsi */}
                <div className="md:col-span-4 text-sm md:text-xl font-normal md:font-thin">
                    <p>
                   SITARI (Sistem Inventarisasi dan Peminjaman Barang Kampus) is a custom-built inventory management system designed to streamline the tracking and lending of institutional assets within a university environment. The system was developed to address the need for a more efficient, transparent, and organized way of managing item requests and usage across departments or student activities.
                   SITARI allows users—such as students, staff, or administrators—to easily browse available items, submit borrowing requests, and monitor return deadlines through a user-friendly web interface. Administrators have access to a dashboard for managing inventory records, approving or rejecting requests, and generating usage reports.
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
                    <h1 className="text-2xl font-semibold">Design Preview</h1>
                </div>

                <div className="flex justify-center items-center flex-col rounded-2xl">
                    <img src="/photos/sitari/prev1.png" className="md:w-6/6 shadow-2xl" alt="img" />
                    <img src="/photos/sitari/prev2.png" className="md:w-6/6 shadow-2xl" alt="img" />
                    <img src="/photos/sitari/prev3.png" className="md:w-6/6 shadow-2xl" alt="img" />
                </div>

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
                    <h1 className="text-2xl font-semibold">Work Preview</h1>
                </div>
                <div className="flex justify-center items-center gap-8 flex-col">
                    <img src="/photos/sitari/1.jpeg" className="shadow-2xl" alt="sitari" />
                    <img src="/photos/sitari/2.jpeg" className="shadow-2xl" alt="sitari" />
                </div>
            </motion.div>
            
        </motion.article>
    </motion.section>
    </>
  );
};

export default Sitari;
