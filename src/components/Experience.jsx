import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Uone Ed-Tech Pvt. Ltd.',
      location: 'Bengaluru (Hybrid)',
      period: 'Oct 2025 - Present',
      description: [
        'Design and develop scalable full-stack applications using Node.js, Express, React, and TypeScript, ensuring high performance and maintainability',
        'Build and optimize RESTful and GraphQL APIs, integrated with relational and NoSQL databases, and improved query performance for large-scale data',
      ],
      technologies: [
        'Node.js',
        'Express.js',
        'React.js',
        'TypeScript',
        'GraphQL',
        'Server Side',
        'Next.js',
      ],
    },
    {
      title: 'SDE-2',
      company: 'Skilzen Ed-Tech Pvt. Ltd.',
      location: 'Bangalore Urban (Hybrid)',
      period: 'Dec 2022 - Oct 2025',
      description: [
        'Crafting efficient database models aligned with dynamic business needs and ensuring seamless data integration',
        'Proactively resolving database issues to maintain performance and reliability',
        'Monitoring and optimizing cloud infrastructure costs for operational efficiency',
        'Establishing best practices for deployment and infrastructure maintenance to enhance scalability',
        'Building and managing CI/CD pipelines to streamline application delivery using DevOps principles',
        'Addressing CDN and caching issues to improve content delivery and application performance',
      ],
      technologies: [
        'Parallel Multithreaded Machine (PM2)',
        'Redis',
        'MySQL',
        'AWS',
        'CI/CD',
        'DevOps',
        'Node.js',
        'React.js',
      ],
    },
    {
      title: 'SDE-1',
      company: 'Skilzen Ed-Tech Pvt. Ltd.',
      location: 'Bangalore Urban (On-site)',
      period: 'Apr 2022 - Dec 2022',
      description: [
        'Developing efficient REST API\'s and working with GraphQL',
        'Working with Cloud Infrastructure AWS services (EC2, IAM, S3, RDS, Route53, Lambda, CloudFront)',
        'Working with Git workflows and Collaboration with Team members',
        'Creating structured datasets and manage database for analyses',
        'Developing reusable, testable, and efficient code and Managing testing and bug fixes',
        'Developing and maintaining a service that extracts websites data using scrapers and APIs across multiple website',
        'Automate the data pipelines working with Python Selenium, Beautiful Soup and Scrapy',
      ],
      technologies: [
        'Redis',
        'React.js',
        'Node.js',
        'GraphQL',
        'AWS',
        'Python',
        'Selenium',
        'Web Scraping',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

                <div className="ml-8 md:ml-20 mb-12">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 md:left-6.5 top-2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900"></div>

                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400 mb-1">
                          <FaBriefcase />
                          <span className="text-lg">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaCalendar />
                          <span>{exp.period} • {exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-900 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400">
              <span className="text-cyan-400 font-semibold">3+ years</span> of professional
              experience in building scalable web applications and cloud infrastructure
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
