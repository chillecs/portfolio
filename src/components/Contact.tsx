import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'cryssthrill@gmail.com'
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      
      // More specific error handling
      let errorMessage = 'Failed to send email. Please try again.';
      
      if (error?.text) {
        errorMessage = `EmailJS Error: ${error.text}`;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      console.error('Detailed error:', errorMessage);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-[#01ADEB]" />,
      title: 'Email',
      value: 'cryssthrill@gmail.com',
      link: 'mailto:cryssthrill@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl text-[#01ADEB]" />,
      title: 'Phone',
      value: '+49 15214177462',
      link: 'tel:+4915214177462'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#01ADEB]" />,
      title: 'Location',
      value: 'Cluj-Napoca, Romania',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: 'https://github.com/chillecs', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/cristian-mircea-552b7335a/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-[#032236]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#01ADEB]">Touch</span>
          </h2>
          <p className="text-xl text-[#4A5565] max-w-3xl mx-auto">
            Keep in touch with me. I'm always looking for new opportunities to learn and grow. And I'm open to new challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-[#4A5565] leading-relaxed mb-8">
                I am very often available to chat. Feel free to reach out to me.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-[#01ADEB]/20 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-[#4A5565] hover:text-[#01ADEB] transition-colors duration-300 cursor-pointer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-[#01ADEB]/20 hover:bg-[#01ADEB]/30 text-[#01ADEB] p-3 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer" target="_blank"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#030712] p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#032236] border border-[#4A5565]/30 rounded-lg text-white placeholder-[#4A5565] focus:outline-none focus:border-[#01ADEB] transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#032236] border border-[#4A5565]/30 rounded-lg text-white placeholder-[#4A5565] focus:outline-none focus:border-[#01ADEB] transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#032236] border border-[#4A5565]/30 rounded-lg text-white placeholder-[#4A5565] focus:outline-none focus:border-[#01ADEB] transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#032236] border border-[#4A5565]/30 rounded-lg text-white placeholder-[#4A5565] focus:outline-none focus:border-[#01ADEB] transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-[#4A5565] text-[#758aa8] cursor-not-allowed' 
                    : 'bg-[#01ADEB] hover:bg-[#01ADEB]/80 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  ❌ Failed to send message. Please try again or contact me directly at cryssthrill@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
