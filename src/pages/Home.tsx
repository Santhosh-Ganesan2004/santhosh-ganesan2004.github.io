import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, Code, Brain, Cpu, Wifi, Users, Lightbulb, Target, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import TypeWriter from '../components/TypeWriter';

const Home: React.FC = () => {
  const skills = [
    { name: 'Artificial Intelligence', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { name: 'IoT Development', icon: Wifi, color: 'from-blue-600 to-cyan-600' },
    { name: 'Machine Learning', icon: Cpu, color: 'from-green-600 to-teal-600' },
    { name: 'Programming', icon: Code, color: 'from-orange-600 to-red-600' },
    { name: 'Team Leadership', icon: Users, color: 'from-indigo-600 to-purple-600' },
    { name: 'Problem Solving', icon: Lightbulb, color: 'from-yellow-600 to-orange-600' },
    { name: 'Project Management', icon: Target, color: 'from-red-600 to-pink-600' },
    { name: 'Communication', icon: MessageCircle, color: 'from-teal-600 to-green-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* Photo */}
            <div className="flex justify-center items-center h-full">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl relative" style={{ left: '-4px', top: '2px' }}>
                  <img
                    src="public/profile_pic.jpg"
                    alt="Santhosh Ganesan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Santhosh Ganesan
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-gray-300 mb-6">
                AI + IoT Engineer in Training
              </h2>
              <TypeWriter
                text="I am a passionate and driven AI + IoT engineer in training, blending cutting-edge artificial intelligence with the power of the Internet of Things to create innovative, impactful solutions. With a solid foundation in programming, machine learning, and embedded systems, I thrive at the intersection of software and hardware. My projects range from smart systems to AI-powered applications, demonstrating my ability to turn ideas into reality. I'm constantly learning, exploring new technologies, and aiming to bridge the gap between technology and real-world challenges."
                speed={2000}
                className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-8"
              />
              <blockquote className="text-xl italic text-blue-600 dark:text-blue-300 border-l-4 border-blue-500 pl-4">
                "Fueling innovation at the crossroads of AI and IoT, I transform ideas into smart, scalable solutions for a connected future"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 dark:border-blue-500/20 hover:border-blue-400/70 dark:hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Boxes */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projects Box */}
            <Link
              to="/projects"
              className="group bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 dark:border-blue-500/20 hover:border-blue-400/70 dark:hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">My Projects</h3>
              </div>
              <p className="text-slate-600 dark:text-gray-400 mb-6">
                Explore my portfolio of AI and IoT projects, from smart home automation 
                to predictive maintenance systems.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                <span className="font-semibold">View Projects</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            {/* Certifications Box */}
            <Link
              to="/certifications"
              className="group bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 dark:border-blue-500/20 hover:border-blue-400/70 dark:hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Certifications</h3>
              </div>
              <p className="text-slate-600 dark:text-gray-400 mb-6">
                View my professional certifications in AI, cloud computing, and IoT technologies 
                from leading industry providers.
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                <span className="font-semibold">View Certifications</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
