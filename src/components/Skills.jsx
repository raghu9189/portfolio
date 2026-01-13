import React from 'react'
import { motion } from 'framer-motion'
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiSequelize,
  SiPostman,
  SiDocker,
  SiGit,
  SiLinux,
  SiMysql,
  SiRedis,
  SiAmazonwebservices,
  SiNginx,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
        { name: 'Python', icon: <SiPython />, color: 'text-blue-400' },
        { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400' },
        { name: 'Sequelize ORM', icon: <SiSequelize />, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <SiReact />, color: 'text-cyan-400' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
        { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: <SiAmazonwebservices />, color: 'text-orange-400' },
        { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
        { name: 'Nginx', icon: <SiNginx />, color: 'text-green-500' },
        { name: 'Linux', icon: <SiLinux />, color: 'text-yellow-400' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
        { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-cyan-400">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 max-w-3xl mx-auto">
              Proficient in modern web technologies with a focus on building scalable, secure, and
              high-performance applications. Experienced in full-stack development, cloud
              infrastructure, and DevOps practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
