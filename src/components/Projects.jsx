import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Secure Note Reader',
      description:
        'A zero-knowledge encrypted note-sharing application built with Node.js and vanilla JavaScript. All encryption happens in the browser - the server only stores encrypted data.',
      technologies: ['JavaScript', 'Node.js', 'Encryption', 'Zero-Knowledge'],
      github: 'https://github.com/raghu9189/secure-note-reader',
      stars: 1,
      highlights: [
        'Client-side encryption for maximum security',
        'Zero-knowledge architecture',
        'Secure note sharing',
      ],
    },
    {
      title: 'Secure Image Viewer',
      description:
        'A web application for encrypting and securely viewing images with password protection. Only users with the correct decryption key can view the images.',
      technologies: ['JavaScript', 'Encryption', 'Web Security'],
      github: 'https://github.com/raghu9189/secure-image-viewer',
      highlights: [
        'Password-protected image encryption',
        'Secure image viewing',
        'Client-side decryption',
      ],
    },
    {
      title: 'Caching Test',
      description:
        'A simple Node.js prototype using Express and node-cache to demonstrate basic in-memory caching with support for cache hit, miss, purge, and update operations.',
      technologies: ['JavaScript', 'Node.js', 'Express', 'Caching'],
      github: 'https://github.com/raghu9189/Caching-Test',
      stars: 2,
      highlights: [
        'In-memory caching demonstration',
        'Cache operation examples',
        'Performance optimization',
      ],
    },
    {
      title: 'FFmpeg Commands Collection',
      description:
        'A handy collection of FFmpeg commands for video and image processing — including compression, conversion, cropping, filtering, extracting audio, creating GIFs, and more.',
      technologies: ['Shell', 'FFmpeg', 'Media Processing'],
      github: 'https://github.com/raghu9189/ffmpeg',
      stars: 2,
      highlights: [
        'Video & image processing',
        'Comprehensive FFmpeg examples',
        'Media manipulation tools',
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.stars && (
                      <div className="flex items-center gap-1 text-gray-400">
                        <FaStar className="text-yellow-400" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2 text-sm">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/raghu9189?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View More on GitHub
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
