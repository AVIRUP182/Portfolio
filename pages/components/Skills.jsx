import React from 'react'
import { motion as Motion } from 'framer-motion';
import { skills } from '../../src/assets/assets.js';

const Skills = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          My 
          <span className='text-blue-500'> Skills</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Technologies I work with to bring ideas to life
        </p>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                className='bg-dark-200 p-6 rounded-lg hover:bg-dark-300 transition-all duration-300 cursor-pointer'
              >
                <div className='flex items-center gap-4 mb-4'>
                  <IconComponent className='text-4xl text-blue' />
                  <h3 className='text-xl font-semibold'>{skill.title}</h3>
                </div>
                <p className='text-gray-400 mb-4'>{skill.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-3 py-1 bg-dark-300 text-sm rounded-full text-gray-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </Motion.div>
  )
}

export default Skills
