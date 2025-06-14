
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hi Alex,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`;
    
    const mailtoUrl = `mailto:alex.johnson@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gunmetal-gray rounded-2xl p-8 border border-amber/20 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-white">
        Get In Touch
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gunmetal-gray border border-royal-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent text-white placeholder-steel-gray transition-all"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gunmetal-gray border border-royal-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent text-white placeholder-steel-gray transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-gunmetal-gray border border-royal-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent text-white placeholder-steel-gray resize-none transition-all"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-royal-blue hover:bg-amber active:bg-amber text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
        >
          <Send size={18} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
