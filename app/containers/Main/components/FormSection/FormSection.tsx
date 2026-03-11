const FormSection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-widest text-sm text-gray-400">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Let’s create <br /> something beautiful
          </h2>

          <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
            Tell us about your project and we’ll get back to you within 24
            hours. Whether it’s a wedding film, commercial, or creative project
            — we’d love to hear about it.
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-white transition"
          />

          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-white transition"
          />

          <input
            type="text"
            placeholder="Instagram / Telegram"
            className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-white transition"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-white transition resize-none"
          />

          <button
            type="submit"
            className="mt-6 bg-white text-black py-3 px-8 w-fit hover:bg-gray-200 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
