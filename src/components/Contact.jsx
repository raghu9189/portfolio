import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'raghu.ballu@gmail.com',
      link: 'mailto:raghu.ballu@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Hyderabad, India',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'raghuballu',
      link: 'https://www.linkedin.com/in/raghuballu/',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'raghu9189',
      link: 'https://github.com/raghu9189',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. If you have
                a project that you want to get started or think you need my help with something,
                then get in touch.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-300 mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors text-sm break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <a
                href="https://github.com/raghu9189"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-slate-800 hover:bg-cyan-500/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raghuballu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-slate-800 hover:bg-cyan-500/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/raghu9.18/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-slate-800 hover:bg-cyan-500/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:raghu.ballu@gmail.com"
                className="w-14 h-14 bg-slate-800 hover:bg-cyan-500/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
              >
                <FaEnvelope size={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
