
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase } from 'lucide-react';
import ContactForm from '../components/ContactForm';

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
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-electric-blue/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-electric-blue/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-electric-blue">
                Alex Johnson
              </h1>
              <h2 className="text-2xl md:text-3xl text-charcoal dark:text-silver-gray mb-6 font-medium">
                AI + IoT Engineer
              </h2>
              <p className="text-lg text-charcoal dark:text-silver-gray leading-relaxed max-w-2xl">
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
              className="group bg-white dark:bg-midnight-blue rounded-2xl p-8 border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-electric-blue">My Projects</h3>
              </div>
              <p className="text-charcoal dark:text-silver-gray mb-6">
                Explore my portfolio of AI and IoT projects, from smart home automation 
                to predictive maintenance systems.
              </p>
              <div className="flex items-center text-neon-green group-hover:text-electric-blue transition-colors">
                <span className="font-semibold">View Projects</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            {/* Certifications Box */}
            <Link
              to="/certifications"
              className="group bg-white dark:bg-midnight-blue rounded-2xl p-8 border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-electric-blue">Certifications</h3>
              </div>
              <p className="text-charcoal dark:text-silver-gray mb-6">
                View my professional certifications in AI, cloud computing, and IoT technologies 
                from leading industry providers.
              </p>
              <div className="flex items-center text-neon-green group-hover:text-electric-blue transition-colors">
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
