import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward, FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Education = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const convocationImages = [
    '/certificates/convocation-1.jpg',
    '/certificates/convocation-2.jpg',
    '/certificates/convocation-3.jpg',
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % convocationImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + convocationImages.length) % convocationImages.length)
  }

  const education = [
    {
      degree: 'Master of Computer Applications',
      field: 'MCA, Computer Programming, Specific Applications',
      university: 'Osmania University',
      location: 'Hyderabad',
      period: 'Oct 2020 - Sep 2022',
      grade: '7.98 CGPA',
      activities: ['Coding Quiz', 'Logo Design'],
      skills: ['Web Development', 'Data Structures', 'Algorithms'],
      hasGallery: true,
    },
    {
      degree: 'Bachelor of Science',
      field: 'B.sc in Statistics and Computer Science',
      university: 'Satavahana University, Karimnagar',
      location: 'Karimnagar',
      period: 'Jun 2017 - Dec 2020',
      grade: '8.9 CGPA',
      activities: ['PPT Presentation'],
      skills: ['Cascading Style Sheets (CSS)', 'Java', 'Statistics', 'Computer Science'],
      hasGallery: false,
    },
  ]

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Education <span className="text-cyan-400">& Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Education Details */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                    } bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300`}
                  >
                    {/* University Icon and Name */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaGraduationCap className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-gray-300 mb-1">{edu.field}</p>
                        <p className="text-gray-400 flex items-center gap-2">
                          <span className="font-semibold">{edu.university}</span>
                        </p>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <span className="px-3 py-1 bg-slate-900 rounded-full text-sm">
                        {edu.period}
                      </span>
                    </div>

                    {/* Grade */}
                    <div className="flex items-center gap-2 mb-6">
                      <FaAward className="text-yellow-400 text-xl" />
                      <span className="text-gray-300">
                        Grade: <span className="font-bold text-cyan-400">{edu.grade}</span>
                      </span>
                    </div>

                    {/* Activities */}
                    {edu.activities.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                          <FaTrophy className="text-purple-400" />
                          Activities & Societies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">
                        Skills Acquired
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-900 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Image Placeholder or Gallery */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                    } bg-slate-800/30 backdrop-blur-sm rounded-lg border-2 ${
                      edu.hasGallery ? 'border-cyan-500/30' : 'border-slate-700'
                    } transition-all duration-300 p-8 flex items-center justify-center min-h-[400px] group relative overflow-hidden`}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {edu.hasGallery ? (
                      /* Convocation Image Gallery */
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Main Image Display */}
                        <div className="relative w-full h-full">
                          <img
                            src={convocationImages[currentImageIndex]}
                            alt={`Convocation ceremony ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-2xl"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23334155" width="400" height="300"/%3E%3Ctext fill="%2306b6d4" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EAdd your convocation photo%3C/text%3E%3C/svg%3E'
                            }}
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-lg"></div>

                          {/* Image Caption */}
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h4 className="text-lg font-bold mb-1">Convocation Ceremony</h4>
                            <p className="text-sm text-gray-300">{edu.university}</p>
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-cyan-500 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                          aria-label="Previous image"
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-cyan-500 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                          aria-label="Next image"
                        >
                          <FaChevronRight />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {convocationImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentImageIndex
                                  ? 'bg-cyan-400 w-8'
                                  : 'bg-gray-500 hover:bg-gray-400'
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>

                        {/* Image Counter */}
                        <div className="absolute top-4 right-4 bg-slate-900/80 px-3 py-1 rounded-full text-sm text-white z-10">
                          {currentImageIndex + 1} / {convocationImages.length}
                        </div>
                      </div>
                    ) : (
                      /* Simple Icon for Bachelor's */
                      <div className="text-center relative z-10">
                        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaGraduationCap className="text-6xl text-cyan-400" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-300 mb-2">Education Complete</h4>
                        <p className="text-gray-500 text-sm">
                          {edu.university}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connection Line */}
                {index < education.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
