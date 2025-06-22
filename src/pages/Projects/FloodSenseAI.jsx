import React, { useRef } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import AnimatedSeparator from "../../components/AnimatedSeparator";
import { Link } from "react-router-dom"; // pastikan sudah di-import
import CustomAnimatedSeparator from "../../components/CustomAnimatedSeparator";

const FloodSenseAI = () => {
  const containerRef = useRef(null);

  return (
    <>
    <motion.section
      ref={containerRef}
      style={{ fontFamily: "Mori, sans-serif" }}
      className="relative z-10 bg-[#fffbee] text-black flex items-start justify-end"
    >
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
            <Link
            to="/projects"
            className="bg-black text-white px-6 py-6 rounded-full shadow-md hover:bg-gray-800 transition"
            >
            ←
            </Link>
        </div>
        

        <article className="w-[98vw] min-h-screen max-w-screen-xl mx-auto py-20 justify-center items-center flex flex-col">
            <div className="w-9/12 text-left">
                <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                FloodSenseAI
                </h1>
            </div>
            <div className="w-9/12">
                <CustomAnimatedSeparator mb={8} h={1} mx={0} />
            </div>

            <div className="grid gap-6 w-9/12 grid-cols-6 font-bold text-2xl">
                <div className="rounded-lg col-span-2 flex-col">
                    <div className="flex items-center">
                        <span className="bg-black px-6 py-1 rounded-full text-white text-xl mr-6 mb-2">Date</span>
                        <p className="text-xl">2025</p>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-black px-6 py-1 rounded-full text-white text-xl mr-6 mb-2">Role</span>
                        <p className="text-xl">Android Developer</p>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-black px-6 py-1 rounded-full text-white text-xl mr-6">Tech</span>
                        <p className="text-xl">Flutter</p>
                    </div>
                </div>
                <div className="rounded-lg col-span-4 text-xl font-thin">
                    <p>A unifying centralized / decentralized cryptocurrency exchange and social payment platform. Company goals include bringing crypto transactions to a more general user base and being a leader in encouraging integration.</p>
                </div>
            </div>
             <div className="w-9/12">
                <CustomAnimatedSeparator my={8} h={1} mx={0} />
            </div>
            <div className="w-9/12 flex-col">
                <div className="w-9/12 items-start flex gap-3">
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

                <div className="py-8 flex justify-center items-center">
                    <img src="/photos/preview_floodsenseai.png" className="md:w-4/6" alt="floodsenseai" />
                </div>

                <div className="w-9/12 items-start flex gap-3">
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
                <div className="py-8 flex justify-center items-center gap-8 flex-col">
                    <img src="/photos/floodsenseai/1.jpeg" className="rounded-2xl shadow-2xl" alt="floodsenseai" />
                    <img src="/photos/floodsenseai/3.jpeg" className="rounded-2xl shadow-2xl" alt="floodsenseai" />
                    <img src="/photos/floodsenseai/2.jpeg" className="rounded-2xl shadow-2xl" alt="floodsenseai" />
                </div>
            </div>
            


        </article>
    </motion.section>
    </>
  );
};

export default FloodSenseAI;
