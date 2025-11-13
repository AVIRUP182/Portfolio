import React from 'react'

const ProjectCard = ({ title, description, image, tech = [], icons = [], demo, code }) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-200 rounded-full text-sm text-gray-300'>
              {item}
            </span>
          ))}
        </div>

        {icons.length > 0 && (
          <div className='flex items-center gap-3 mb-4'>
            {icons.map((Icon, idx) => (
              <Icon key={idx} className='text-lg text-blue' />
            ))}
          </div>
        )}

        <div className='flex gap-3'>
          {demo && demo !== '#' && (
            <a href={demo} target='_blank' rel='noreferrer' className='text-blue hover:underline'>Live Demo</a>
          )}
          {code && code !== '#' && (
            <a href={code} target='_blank' rel='noreferrer' className='text-blue hover:underline'>Source</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
