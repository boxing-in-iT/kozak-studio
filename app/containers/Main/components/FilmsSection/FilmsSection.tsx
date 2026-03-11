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
    <section className="bg-black  px-24 pt-8 pb-32">
      <div className="text-white flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto mb-16">
        <h2 className="uppercase text-5xl md:text-7xl font-extrabold tracking-wide">
          Films
        </h2>
        <p className="text-gray-300 text-lg max-w-md text-right md:text-left">
          We offer professional film editing of any length or style
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {videos.map((videoId, index) => (
          <VideoCard key={index} videoId={videoId} />
        ))}
      </div>
    </section>
  );
};

export default FilmsSection;
