// src/pages/About.jsx
import { FaUser, FaBriefcase, FaCertificate, FaGraduationCap, FaCode } from 'react-icons/fa';
import DecryptedText from '../components/DecryptedText';

export default function About() {
  const skillsData = [
    {
      category: "Frontend",
      icon: "💻",
      color: "text-blue-400",
      borderColor: "border-blue-500",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "JavaScript", icon: "📜" },
        { name: "TypeScript", icon: "🔷" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Next.js", icon: "▲" }
      ]
    },
    {
      category: "Backend",
      icon: "🔧",
      color: "text-green-400",
      borderColor: "border-green-500",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "Java", icon: "☕" },
        { name: "REST APIs", icon: "🌍" },
        { name: "GraphQL", icon: "🔗" },
        { name: "Socket.io", icon: "⚡" }
      ]
    },
    {
      category: "Database & Cloud",
      icon: "☁️",
      color: "text-purple-400",
      borderColor: "border-purple-500",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🗃️" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Firebase", icon: "🔥" },
        { name: "Redis", icon: "🔴" }
      ]
    },
    {
      category: "Tools & Other",
      icon: "🛠️",
      color: "text-orange-400",
      borderColor: "border-orange-500",
      skills: [
        { name: "Git/GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💼" },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
        { name: "Linux", icon: "🐧" },
        { name: "Agile/Scrum", icon: "🔄" }
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-indigo-600/40 to-purple-600/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-tl from-teal-600/40 to-cyan-600/20 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-pink-600/20 to-violet-600/20 rounded-full blur-2xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-6xl h-[85vh] sm:h-[90vh] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-3 sm:p-4 lg:p-6 border border-gray-700/60 relative z-10 overflow-hidden">
        
        {/* Left Column: Profile & Info */}
        <div className="lg:col-span-1 flex flex-col items-center text-center space-y-3 sm:space-y-4 p-3 sm:p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl sm:rounded-2xl border border-gray-600/50 backdrop-blur-sm overflow-hidden">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            alt="Mohamed Mujtaba"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/25"
          />
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Mohamed Mujtaba</h1>
            <p className="text-indigo-400 font-medium text-sm sm:text-base lg:text-lg">
              <DecryptedText 
                text="Full-Stack Developer" 
                speed={100}
                maxIterations={20}
                animateOn="view"
              />
            </p>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
            <DecryptedText 
              text="Passionate Full-Stack Developer with expertise in modern web technologies and cloud computing. Specialized in building scalable, user-centric applications using MERN stack with a strong foundation in software engineering principles." 
              speed={100}
              maxIterations={20}
              animateOn="view"
            />
          </p>
          <div className="flex items-center gap-2 bg-gradient-to-r from-teal-900/40 to-teal-800/40 text-teal-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-teal-500/30">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            Available for remote work
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-5 overflow-y-auto max-h-full pr-1 sm:pr-2 scrollbar-hide">
          {/* About Me Section */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
              <FaUser className="text-indigo-400 text-sm sm:text-base" /> About Me
            </h2>
            <div className="space-y-2 text-gray-200 bg-gradient-to-r from-gray-800/40 to-gray-900/40 p-3 sm:p-4 rounded-xl border-l-4 border-indigo-500 backdrop-blur-sm">
              <p className="text-xs sm:text-sm lg:text-base">
                <DecryptedText 
                  text="I am a dedicated Information Science & Engineering graduate with a strong passion for developing innovative web solutions. My journey in software development spans across frontend and backend technologies, with particular expertise in React.js, Node.js, and modern JavaScript frameworks." 
                  speed={120}
                  maxIterations={20}
                  animateOn="view"
                />
              </p>
              <p className="text-xs sm:text-sm lg:text-base mt-3">
                <DecryptedText 
                  text="I thrive on solving complex problems through clean, efficient code and have experience in database management, cloud platforms, and agile development methodologies. My goal is to create seamless user experiences while maintaining robust, scalable backend architectures." 
                  speed={120}
                  maxIterations={20}
                  animateOn="view"
                />
              </p>
              <p className="text-xs sm:text-sm lg:text-base mt-3">
                <DecryptedText 
                  text="Currently seeking opportunities to contribute to innovative projects where I can leverage my technical skills and continue growing as a developer in a collaborative environment." 
                  speed={120}
                  maxIterations={20}
                  animateOn="view"
                />
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
              <FaGraduationCap className="text-teal-400 text-sm sm:text-base" /> Education
            </h2>
            <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 p-3 sm:p-4 rounded-xl border-l-4 border-teal-500 backdrop-blur-sm">
              <h3 className="font-bold text-teal-300 text-xs sm:text-sm lg:text-base">B.E. in Information Science & Engineering</h3>
              <p className="text-xs sm:text-sm text-gray-400">PES College of Engineering, Mandya</p>
              <p className="text-xs text-gray-500 mt-1">
                <DecryptedText 
                  text="Focused on software engineering principles, data structures, algorithms, and modern web technologies" 
                  speed={150}
                  maxIterations={20}
                  animateOn="view"
                />
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <FaCode className="text-indigo-400 text-sm sm:text-base" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {skillsData.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-3 sm:p-4 rounded-xl border border-gray-600/50 backdrop-blur-sm"
                >
                  <h3 className={`font-bold text-sm sm:text-base mb-2 sm:mb-3 flex items-center gap-2 ${category.color}`}>
                    <span className="text-base sm:text-lg">{category.icon}</span>
                    <DecryptedText 
                      text={category.category} 
                      speed={100}
                      maxIterations={10}
                      animateOn="view"
                    />
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm opacity-70">{skill.icon}</span>
                          <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internships & Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <section>
              <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <FaBriefcase className="text-indigo-400 text-xs sm:text-sm" /> Internships
              </h2>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 p-2 sm:p-3 rounded-xl border-l-4 border-indigo-500 backdrop-blur-sm">
                  <h3 className="font-bold text-indigo-300 text-xs sm:text-sm">
                    <DecryptedText 
                      text="Backend Developer Intern" 
                      speed={100}
                      maxIterations={20}
                      animateOn="view"
                    />
                  </h3>
                  <p className="text-xs text-gray-400">
                    <DecryptedText 
                      text="NITK Surathkal" 
                      speed={120}
                      maxIterations={20}
                      animateOn="view"
                    />
                  </p>
                  <p className="text-xs text-gray-500">
                    <DecryptedText 
                      text="January 2025 - June 2025" 
                      speed={140}
                      maxIterations={20}
                      animateOn="view"
                    />
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <FaCertificate className="text-teal-400 text-xs sm:text-sm" /> Certificates
              </h2>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 p-2 sm:p-3 rounded-xl border-l-4 border-teal-500 backdrop-blur-sm">
                  <h3 className="font-bold text-teal-300 text-xs sm:text-sm">AWS Certified Cloud Practitioner</h3>
                  <p className="text-xs text-gray-400">Meta Front-End Developer</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
