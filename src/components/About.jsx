import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaCloud, FaRocket } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaBriefcase className="text-cyan-400" size={32} />,
      title: '3+ Years',
      description: 'Professional Experience',
    },
    {
      icon: <FaCode className="text-purple-400" size={32} />,
      title: 'Full Stack',
      description: 'Development Expertise',
    },
    {
      icon: <FaCloud className="text-cyan-400" size={32} />,
      title: 'Cloud Expert',
      description: 'AWS & DevOps',
    },
    {
      icon: <FaRocket className="text-purple-400" size={32} />,
      title: 'Performance',
      description: 'Optimization Focused',
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Senior Software Engineer at{' '}
                <span className="text-cyan-400">Uone Ed-Tech Pvt. Ltd.</span>
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I'm a passionate software engineer with 3+ years of experience in building scalable
                backend systems, interactive frontends, and automating cloud deployments. Currently working as a Senior Software Engineer at Uone Ed-Tech Pvt. Ltd. in Bengaluru.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I specialize in designing and developing full-stack applications using Node.js, Express, React, and TypeScript. My expertise includes building and optimizing RESTful and GraphQL APIs integrated with both relational and NoSQL databases.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Previously at Skilzen Ed-Tech Pvt. Ltd., I focused on database modeling, cloud infrastructure optimization, and implementing CI/CD pipelines. I'm proficient in modern web technologies and have extensive experience with{' '}
                <span className="text-cyan-400">AWS, MySQL, Redis, Docker</span>, and{' '}
                <span className="text-cyan-400">DevOps practices</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                  Backend Development
                </span>
                <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm">
                  Frontend Development
                </span>
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                  Cloud & DevOps
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <blockquote className="text-xl md:text-2xl italic text-gray-400">
              "Code. Build. Deploy. Repeat."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
