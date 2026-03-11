const HeaderSection = () => {
  return (
    <section className="relative w-full h-[500px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-black"
      >
        <source src="/hero-video-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-black to-transparent"></div>

      <div className="absolute inset-0 z-10  items-center justify-center flex">
        <div className="flex gap-2 items-start justify-center">
          <h1 className="text-white text-5xl font-bold">KOZAK STUDIO</h1>
          <p className="text-white font-100">video editing service</p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
