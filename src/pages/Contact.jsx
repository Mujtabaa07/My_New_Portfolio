// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaUser, FaEdit } from 'react-icons/fa';
import DecryptedText from '../components/DecryptedText';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'mohamedmujtaba07@gmail.com',
      link: 'mailto:mohamedmujtaba07@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 866 0550 110',
      link: 'tel:+15551234567',
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bangalore, India',
      link: null,
      color: 'text-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-mujtaba/',
      color: 'text-blue-600 hover:text-blue-500'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/Mujtabaa07/',
      color: 'text-gray-400 hover:text-white'
    },
    
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-full blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-tl from-blue-600/20 to-indigo-600/10 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>
      <div className="fixed top-1/2 left-1/2 w-[40vw] h-[40vh] bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-full blur-2xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            <DecryptedText 
              text="Get In Touch" 
              speed={100}
              maxIterations={5}
              animateOn="view"
            />
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            <DecryptedText 
              text="Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!" 
              speed={120}
              maxIterations={3}
              animateOn="view"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <FaUser className="text-purple-400 text-base sm:text-xl" />
                <DecryptedText 
                  text="Contact Information" 
                  speed={100}
                  maxIterations={3}
                  animateOn="view"
                />
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-xl p-3 sm:p-4 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                  >
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="flex items-center gap-3 sm:gap-4 hover:transform hover:scale-105 transition-transform"
                      >
                        <div className={`p-2 sm:p-3 rounded-full bg-gray-800/60 ${info.color}`}>
                          <info.icon className="text-base sm:text-lg" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                          <p className="text-white font-medium text-sm sm:text-base">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`p-2 sm:p-3 rounded-full bg-gray-800/60 ${info.color}`}>
                          <info.icon className="text-base sm:text-lg" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                          <p className="text-white font-medium text-sm sm:text-base">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                <DecryptedText 
                  text="Follow Me" 
                  speed={100}
                  maxIterations={2}
                  animateOn="view"
                />
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 sm:p-4 rounded-full bg-gray-800/60 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="text-lg sm:text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                <DecryptedText 
                  text="Quick Response" 
                  speed={100}
                  maxIterations={2}
                  animateOn="view"
                />
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                I typically respond to emails within 24 hours. For urgent matters, feel free to connect with me on LinkedIn for a faster response.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <FaEdit className="text-indigo-400" />
              <DecryptedText 
                text="Send Message" 
                speed={100}
                maxIterations={3}
                animateOn="view"
              />
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300 text-sm">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500/50 transition-colors text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500/50 transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500/50 transition-colors text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500/50 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-indigo-600/60 to-purple-600/60 hover:from-indigo-600/80 hover:to-purple-600/80 text-white font-medium rounded-lg border border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 text-sm sm:text-base ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm sm:text-base" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-2xl p-6 sm:p-10 border border-gray-700/50 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <DecryptedText 
                text="Ready to start your project?" 
                speed={100}
                maxIterations={3}
                animateOn="view"
              />
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              <DecryptedText 
                text="Whether you need a website, web application, or technical consultation, I'm here to help bring your ideas to life." 
                speed={120}
                maxIterations={2}
                animateOn="view"
              />
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <a 
                href="/assets/Mujtaba_Resume.pdf" 
                download
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-full border border-gray-600/50 transition-all duration-300 font-medium shadow-lg hover:shadow-gray-500/10"
              >
                Download Resume
              </a>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-indigo-600/40 hover:bg-indigo-600/60 text-indigo-200 rounded-full border border-indigo-500/50 transition-all duration-300 font-medium shadow-lg hover:shadow-indigo-500/20"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
