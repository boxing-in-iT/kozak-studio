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
    <section className="bg-[#222222]  px-24 py-8 min-h-[20vh]">
      <div className="text-white flex flex-col md:flex-row justify-between items-start gap-6 max-w-6xl mx-auto mb-16">
        {" "}
        <h2 className="uppercase text-5xl md:text-7xl font-extrabold tracking-wide">
          {" "}
          Team{" "}
        </h2>{" "}
        <p className="text-gray-300 text-lg max-w-md text-right md:text-left">
          {" "}
          The smartest people work every day to provide the best service and
          make our clients happy{" "}
        </p>{" "}
      </div>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="group flex flex-col gap-4 cursor-pointer">
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="w-full h-[340px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* TEXT */}
            <div className="text-white">
              <p className="text-2xl font-bold">{member.name}</p>
              <p className="text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
