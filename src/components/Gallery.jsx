import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaImages, FaTimes } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      src: '/gallery/office-1.jpeg',
      alt: 'Raghu at office workspace',
      title: 'At the Desk',
    },
    {
      src: '/gallery/office-2.jpeg',
      alt: 'Team collaboration at office',
      title: 'Team Collaboration',
    },
    {
      src: '/gallery/office-3.jpeg',
      alt: 'Office environment and workspace',
      title: 'Work Environment',
    },
    {
      src: '/gallery/office-4.jpeg',
      alt: 'Professional moment at office',
      title: 'Office Life',
    },
    {
      src: '/gallery/office-5.jpeg',
      alt: 'Team gathering at workplace',
      title: 'Team Together',
    },
    // {
    //   src: '/gallery/office-6.jpeg',
    //   alt: 'Professional workplace moment',
    //   title: 'Professional Life',
    // },
  ]

  return (
    <section id="gallery" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <FaImages className="text-4xl text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Office <span className="text-cyan-400">Moments</span>
              </h2>
            </motion.div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A glimpse into my professional journey and memorable moments at the workplace
            </p>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Thumbnail Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23334155" width="400" height="400"/%3E%3Ctext fill="%2306b6d4" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPhoto ${index + 1}%3C/text%3E%3C/svg%3E`
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-semibold">{image.title}</p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-lg transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-slate-800 hover:bg-cyan-500 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes size={24} />
          </button>

          {/* Full Size Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </motion.div>

          {/* Navigation Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
            Click anywhere to close
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
