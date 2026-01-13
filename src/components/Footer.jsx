import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2">
              Built with <FaHeart className="text-red-500" /> by{' '}
              <span className="text-cyan-400 font-semibold">Raghu Ballu</span>
            </p>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p className="text-sm italic">"Code. Build. Deploy. Repeat."</p>
            <p className="text-sm mt-1">
              Designed with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
