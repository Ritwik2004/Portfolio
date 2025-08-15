import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="min-h-full w-full bg-[#1e1e1f] text-gray-300 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          Hi, I'm Ritwik Kundu 👋
        </h1>

        <p className="text-lg leading-relaxed">
          I'm a passionate <span className="text-yellow-300 font-semibold">Full-Stack Web Developer</span> and a final-year B.Tech student at <span className="text-white font-medium">❝Haldia Institute Of Technology ❞</span>.
        </p>

        <p className="text-md text-gray-400">
          I specialize in building real-time, scalable, and AI-powered applications using technologies like <span className="text-white">React.js, Node.js, MongoDB, Neon SQL, Socket.IO, and WebRTC</span>.  
          My projects reflect a strong understanding of both frontend elegance and backend efficiency. <br /> I also know the basic <span className="text-white"> HTML, CSS, JS</span> for frontend.
        </p>

        <p className="text-md text-gray-400">
          From chat systems to AI content platforms, I love turning complex ideas into sleek, secure, and user-centric digital products.
        </p>

        <div className="flex gap-4 pt-4">
          <Link
            to="/about-me"
            className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Learn More
          </Link>
          <Link
            to="/portfolio"
            className="border border-yellow-400 text-yellow-300 px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
