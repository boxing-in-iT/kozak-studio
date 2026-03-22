"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const FormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀", { id: toastId });

        setForm({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong 😢", { id: toastId });
      }
    } catch (error) {
      toast.error("Server error 😬", { id: toastId });
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-widest text-sm text-gray-400">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Let’s create <br /> something beautiful
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="bg-transparent border-b border-gray-700 py-3 outline-none"
          />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email address"
            className="bg-transparent border-b border-gray-700 py-3 outline-none"
          />

          <input
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            placeholder="Instagram / Telegram"
            className="bg-transparent border-b border-gray-700 py-3 outline-none"
          />

          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your project..."
            className="bg-transparent border-b border-gray-700 py-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-white text-black py-3 px-8 w-fit hover:bg-gray-200 transition flex items-center gap-2"
          >
            {loading && (
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
