// Component by cartikeyalavu
import { useState } from "react";

export default function ContactForm() {
  // Model the three necessary API states
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); // Clear the form fields after success
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12">
      {status === "success" ? (
        <div className="p-6 bg-green-50 text-green-700 rounded-xl border border-green-200">
          <h3 className="font-bold text-lg">Message sent!</h3>
          <p>Thanks for reaching out. I'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
              placeholder="Enter your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#1a1a1a] text-white py-4 rounded-full font-bold hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center font-medium">
              Failed to send message. Please try again later.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
