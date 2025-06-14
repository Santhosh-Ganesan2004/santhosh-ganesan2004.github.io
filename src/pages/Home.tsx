
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import TypingAnimation from '../components/TypingAnimation';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-burnt-orange/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-burnt-orange/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-steel-blue">
                <TypingAnimation text="Alex Johnson" speed={100} />
              </h1>
              <h2 className="text-2xl md:text-3xl text-jet-black dark:text-light-ash-gray mb-6 font-medium">
                <TypingAnimation text="AI + IoT Engineer" speed={80} />
              </h2>
              <div className="text-lg text-jet-black dark:text-light-ash-gray leading-relaxed max-w-2xl">
                <TypingAnimation 
                  text="Passionate about bridging the gap between artificial intelligence and the Internet of Things. With over 5 years of experience, I specialize in creating intelligent systems that transform how we interact with the physical world through cutting-edge AI algorithms and IoT architectures."
                  speed={30}
                />
              </div>
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
              className="group bg-white dark:bg-steel-blue rounded-2xl p-8 border border-burnt-orange/20 hover:border-burnt-orange/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-burnt-orange rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-steel-blue dark:text-white">My Projects</h3>
              </div>
              <p className="text-jet-black dark:text-light-ash-gray mb-6">
                Explore my portfolio of AI and IoT projects, from smart home automation 
                to predictive maintenance systems.
              </p>
              <div className="flex items-center text-military-green group-hover:text-burnt-orange transition-colors">
                <span className="font-semibold">View Projects</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            {/* Certifications Box */}
            <Link
              to="/certifications"
              className="group bg-white dark:bg-steel-blue rounded-2xl p-8 border border-burnt-orange/20 hover:border-burnt-orange/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-burnt-orange rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-steel-blue dark:text-white">Certifications</h3>
              </div>
              <p className="text-jet-black dark:text-light-ash-gray mb-6">
                View my professional certifications in AI, cloud computing, and IoT technologies 
                from leading industry providers.
              </p>
              <div className="flex items-center text-military-green group-hover:text-burnt-orange transition-colors">
                <span className="font-semibold">View Certifications</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
