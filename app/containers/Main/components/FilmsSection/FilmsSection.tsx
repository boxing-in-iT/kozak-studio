"use client";

import { motion } from "framer-motion";
import VideoCard from "../../../../components/VideoCard";

const videos = [
  "slD8oXYa7So",
  "slD8oXYa7So",
  "slD8oXYa7So",
  "slD8oXYa7So",
  "slD8oXYa7So",
  "slD8oXYa7So",
];

const FilmsSection = () => {
  return (
    <section className="bg-black px-4 md:px-24 pt-12 md:pt-16 pb-24 md:pb-32 overflow-hidden">
      {/* HEADER */}
      <div className="text-white flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="uppercase text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide text-center md:text-left"
        >
          Films
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base md:text-lg max-w-md text-center md:text-left"
        >
          We offer professional film editing of any length or style
        </motion.p>
      </div>

      {/* ✅ GRID на десктопе */}
      <div className="hidden md:grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {videos.map((videoId, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <VideoCard videoId={videoId} />
          </motion.div>
        ))}
      </div>

      {/* ✅ МОБИЛКА (шахматка) */}
      <div className="flex flex-col gap-12 max-w-5xl mx-auto md:hidden">
        {videos.map((videoId, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div className="w-[90%]">
                <VideoCard videoId={videoId} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FilmsSection;
