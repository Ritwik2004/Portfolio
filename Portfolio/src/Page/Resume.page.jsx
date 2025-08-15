import React from "react";

const technicalSkill = [
  {head: "Languages:", body: "C, Java, Python, HTML, CSS, JavaScript, SQL"},
  {head: "Technologies:", body: "React.js, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, Bootstrap"},
  {head: "Concepts:", body: "DSA, OOP, API, DB Normalization, Agile, AI, ML, Cloud, Networks"}
]


const projectsDetails = [
  { Name: "Real-Time Chat Application", 
    Skills: "Tech Stack: React.js, Node.js, MongoDB, Socket.IO, Cloudinary", 
    Summary1: "Secure auth, OTP verification, media sharing, real-time online status", 
    Summary2: "Unseen message tracking and responsive design", 
    Github: "https://github.com/Ritwik2004/My-Chat.git", 
    DemoLink: "https://my-chat-bice.vercel.app" },

  { Name: "AI Content Creation Platform", 
    Skills: "Tech Stack: React.js, Node.js, Neon (SQL), Clerk, Cloudinary", 
    Summary1: "OpenAI text generation + ClipDrop image editing (object removal)", 
    Summary2: "Auth, media upload, and subscription logic", 
    Github: "https://github.com/Ritwik2004/QuickAI", 
    DemoLink: "http://my-ai-orcin-nine.vercel.app" },

  { Name: "College Utility Platform (Backend)", 
    Skills: "Tech Stack: Node.js, Express.js, MongoDB, JWT", 
    Summary1: "Role-wise JWT auth, file uploads, profile/product/notes management", 
    Summary2: "Scalable modular REST APIs", 
    Github: "https://github.com/Ritwik2004/Alok-Jyoti.git", 
    DemoLink: "" }
]

const activity = [
  { platForm: 'LeetCode', performence: '' },
  { platForm: 'GFG', performence: '' },
  { platForm: 'HackerRank', performence: '' }
]

const Resume = () => {
  return (
    <div className="min-h-screen w-full bg-[#1e1e1f] text-gray-300 px-6 pb-10 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🎓 Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-white">Haldia Institute of Technology (2022 - 2026)</p>
              <p>Bachelor of Technology in Information Technology</p>
              <p>CGPA: 8.28 / 10.00</p>
              <p className="text-sm text-gray-400">Haldia, West Bengal</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Ramnagar Abinash High School (2020 - 2022)</p>
              <p>Higher Secondary – 91.6%</p>
              <p className="text-sm text-gray-400">Arambagh, Hooghly, West Bengal</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Salepur Santosh Sadharan Vidyapith (2018 - 2020)</p>
              <p>Secondary – 81.7%</p>
              <p className="text-sm text-gray-400">Salepur, Hooghly, West Bengal</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🛠 Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalSkill.map(({head,body}, index)=>(
              <div key={index}>
                <p className="font-semibold text-white">{head}</p>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">📁 Projects</h2>
          <div className="space-y-6">
            {projectsDetails.map(({Name, Skills, Summary1, Summary2, Github, DemoLink},index)=>(
              <div key={index}>
                <p className="text-lg font-semibold text-white">{Name}</p>
                <p>{Skills}</p>
                <ul className="list-disc list-inside ml-4">
                  <li>{Summary1}</li>
                  <li>{Summary2}</li>
                </ul>
                <p className="text-sm text-blue-400">
                  {Github ?  <a href={Github} target="_blank" rel="noopener noreferrer">GitHub </a>  : ""}
                  {DemoLink ?  <a href={DemoLink} target="_blank" rel="noopener noreferrer">| Live Demo</a>  : ""}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🏆 Activities & Achievements</h2>
          <p>• Solved 240+ DSA problems on LeetCode (rank &lt; 11L) and GFG (score: 245)</p>
        </section>

        {/* Additional Info */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">📌 Additional</h2>
          <p><span className="font-semibold">Languages:</span> Bengali, English, Hindi</p>
          <p><span className="font-semibold">Hobbies:</span> Reading story books, listening to audio stories</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
