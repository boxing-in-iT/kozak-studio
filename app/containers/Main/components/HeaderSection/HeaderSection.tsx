"use client";

import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[400px] md:h-[500px] overflow-hidden">
      {/* видео с fade-in */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video-1.mp4" type="video/mp4" />
      </motion.video>

      {/* затемнение */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* градиент */}
      <div className="absolute bottom-0 left-0 w-full h-40 md:h-64 bg-gradient-to-t from-black to-transparent"></div>

      {/* контент */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
        <div className="flex flex-col md:flex-row md:items-start items-center gap-2">
          {/* заголовок */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-bold text-3xl sm:text-4xl md:text-5xl"
          >
            KOZAK STUDIO
          </motion.h1>

          {/* подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white font-light text-sm sm:text-base md:text-lg"
          >
            video editing service
          </motion.p>
        </div>
      </div>

      {/* scroll индикатор */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-5 h-9 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeaderSection;
