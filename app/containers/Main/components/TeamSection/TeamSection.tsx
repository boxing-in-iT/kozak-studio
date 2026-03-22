"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Daniel Kozak",
    role: "Founder / Director",
    image: "/team/ceo.jpeg",
  },
  {
    name: "Anna Smith",
    role: "Video Editor",
    image: "/team/cas.jpeg",
  },
  {
    name: "Mark Johnson",
    role: "Colorist",
    image: "/team/video_editor.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#222222] px-4 md:px-24 py-12 md:py-16 overflow-hidden">
      {/* HEADER */}
      <div className="text-white flex flex-col md:flex-row justify-between items-start gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="uppercase text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide"
        >
          Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base md:text-lg max-w-md"
        >
          The smartest people work every day to provide the best service and
          make our clients happy
        </motion.p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-4 cursor-pointer"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="w-full h-[280px] md:h-[340px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* hover text (появляется сверху) */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-sm">View profile →</p>
              </div>
            </div>

            {/* TEXT */}
            <div className="text-white">
              <p className="text-xl md:text-2xl font-bold">{member.name}</p>
              <p className="text-gray-400 text-sm md:text-base">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
