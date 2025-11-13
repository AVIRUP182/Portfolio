import React from 'react'
import { motion as Motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../../src/assets/assets.js'

const Projects = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='projects'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-blue'>Projects</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my recent work</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <ProjectCard {...project} />
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.div>
  )
}

export default Projects
