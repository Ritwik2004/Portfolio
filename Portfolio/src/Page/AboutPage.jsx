import React from "react";

const technologies = [
  'React', 'Node.js', 'Express', 'MongoDB', 'Neon SQL', 'Socket.IO'
]


const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#1e1e1f] text-gray-300 px-6 pb-2 md:px-16 lg:px-24 z-2">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Hi, I’m <span className="text-4xl font-bold text-yellow-400">Ritwik Kundu</span>, <br /> a passionate and detail-oriented{" "}
          <span className="text-white font-semibold">Full-Stack Web Developer</span> and a final-year{" "}
          <span className="text-white font-semibold">B.Tech Information Technology</span> student.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          My core expertise lies in building scalable, responsive, and real-time web applications using technologies like{" "}
          {technologies.map((val, index)=>(
          <span key={index} className="text-white font-semibold">{val} </span>
          ))}
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I'm currently exploring advanced areas like{" "}
          <span className="text-white font-semibold">WebRTC</span> and{" "}
          <span className="text-white font-semibold">AI integrations</span> (OpenAI APIs, ClipDrop) to build intelligent, modern apps. I love bringing ideas to life through clean code and user-friendly interfaces.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🔧 Technical Highlights:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time Chat App with <span className="font-semibold">Socket.IO</span> & <span className="font-semibold">WebRTC</span></li>
            <li>Full-stack AI Tools Platform with image & text generation</li>
            <li>OTP Authentication, JWT security, Cloudinary upload</li>
            <li>Well-structured APIs and modern UI with <span className="font-semibold">Tailwind CSS</span></li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🎯 My Goal:</h2>
          <p className="text-lg leading-relaxed">
            To contribute to impactful, user-centric software products and grow as a developer in a collaborative, fast-paced team environment.
          </p>
        </div>

        <div className="text-lg">
          ✉️ <span className="text-yellow-400 font-semibold">Let’s connect</span> — I’m open to internships, freelance gigs, and collaborative projects!
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
