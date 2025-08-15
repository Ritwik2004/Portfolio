import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)


  const onsubmitHandeller = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.post('/api/auth/sendMail', { email, name, message })
      if (data.success) {
        toast.success("Mail send Successfully.")
        setName("");
        setEmail("");
        setMessage("");
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#1e1e1f] text-gray-300 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">

        <p className="text-lg text-gray-400 mb-8">
          I'm open to collaborations, internships, freelance opportunities, or just tech conversations!
          Feel free to reach out through the form below or via the links provided.
        </p>

        {/* Contact Form */}
        <form
          // action="https://formspree.io/f/your-form-id" // Optional: replace with your Formspree ID
          // method="POST"
          className="grid gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your Name"
              className="bg-[#1e1e1f] text-white border border-[#383838] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your Email"
              className="bg-[#1e1e1f] text-white border border-[#383838] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <textarea
            name="message"
            rows="6"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Your Message"
            className="bg-[#1e1e1f] text-white border border-[#383838] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            onClick={onsubmitHandeller}
            className='w-full flex justify-center items-center gap-2 bg-gradient-to-r bg-yellow-500 text-black font-semibold px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:bg-yellow-400'
          >
            {loading && (
              <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
            )}
            {loading ? "sending Message..." : "Send Message"}
          </button>

        </form>

        {/* Direct Info */}
        <div className="mt-12 space-y-3 text-sm">
          <p><span className="text-yellow-300 font-medium">Email:</span> <a href="mailto:ritwikkundu09@gmail.com" className="text-blue-400">ritwikkundu09@gmail.com</a></p>
          <p><span className="text-yellow-300 font-medium">LinkedIn:</span> <a href="https://linkedin.com/in/rik09" target="_blank" rel="noopener noreferrer" className="text-blue-400">linkedin.com/in/rik09</a></p>
          <p><span className="text-yellow-300 font-medium">GitHub:</span> <a href="https://github.com/Ritwik2004" target="_blank" rel="noopener noreferrer" className="text-blue-400">github.com/Ritwik2004</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
