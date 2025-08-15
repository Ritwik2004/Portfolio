import React from "react";
import { ChatApp, QuickAI, Backend, Frontend, TestCaseGenerator } from '../assets/assets.js'

const projects = [
  {
    title: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat app with secure auth, OTP verification, media sharing, online status, and responsive UI.",
    techStack: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Cloudinary"],
    image: ChatApp,
    github: "https://github.com/Ritwik2004/My-Chat.git",
    demo: "https://my-chat-bice.vercel.app",
  },
  {
    title: "AI Content Creation Platform",
    description:
      "A modern AI tool that generates text (OpenAI) and edits images (ClipDrop) with user authentication and subscription support.",
    techStack: ["React.js", "Node.js", "Neon", "Clerk", "Cloudinary"],
    image: QuickAI,
    github: "https://github.com/Ritwik2004/QuickAI",
    demo: "http://my-ai-orcin-nine.vercel.app",
  },
  {
    title: "AI Testcase Generator",
    description:
      "A modern AI tool that generates text (OpenAI) and edits images (ClipDrop) with user authentication and subscription support.",
    techStack: ["React.js", "Node.js", "Neon", "Clerk", "Cloudinary"],
    image: TestCaseGenerator,
    github: "https://github.com/Ritwik2004/QuickAI",
    demo: "http://my-ai-orcin-nine.vercel.app",
  },
  {
    title: "College Utility Platform (Backend Project)",
    description:
    "Scalable backend platform with JWT-based role authentication, file uploads, profile, room, products, shops, order and note management.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    image: Backend,
    github: "https://github.com/Ritwik2004/Alok-Jyoti.git",
  },
  {
    title: "Lab Registration System (Frontend Project)",
    description:
    "A Lab Registration System where students save there entry and exit time in the Lab and also admin see, update or control this system.",
    techStack: ["HTML, CSS, JS"],
    image: Frontend,
    github: "https://github.com/Ritwik2004/Lab-Project",
    demo: "https://ritwik2004.github.io/Lab-Project/",
  }
];

const PortFolio = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1f] text-gray-300 px-6 pb-10 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e1e1f] border border-[#383838] rounded-2xl overflow-hidden shadow-md transition transform hover:shadow-gray-500/30"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover border-b border-[#383838]"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#2b2b2d] text-yellow-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { PortFolio };
