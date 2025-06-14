
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CertificationsModal from '../components/CertificationsModal';

const Home: React.FC = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Alex Johnson"
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
                  Alex Johnson
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                AI + IoT Engineer
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Passionate about bridging the gap between artificial intelligence and the Internet of Things. 
                With over 5 years of experience, I specialize in creating intelligent systems that transform 
                how we interact with the physical world through cutting-edge AI algorithms and IoT architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Boxes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projects Box */}
            <Link
              to="/projects"
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">My Projects</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Explore my portfolio of AI and IoT projects, from smart home automation 
                to predictive maintenance systems.
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="font-semibold">View Projects</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            {/* Certifications Box */}
            <button
              onClick={() => setIsCertModalOpen(true)}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-left w-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <p className="text-gray-400 mb-6">
                View my professional certifications in AI, cloud computing, and IoT technologies 
                from leading industry providers.
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="font-semibold">View Certifications</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Certifications Modal */}
      <CertificationsModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />
    </div>
  );
};

export default Home;
