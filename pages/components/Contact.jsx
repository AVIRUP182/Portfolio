import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Get In <span className='text-blue'>Touch</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                <input 
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Enter your name'
                  className='w-full bg-dark-300 border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-blue transition'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
                <input 
                  id='email'
                  name='email'
                  type='email'
                  placeholder='your.email@example.com'
                  className='w-full bg-dark-300 border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-blue transition'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  placeholder='Tell me about your project...'
                  className='w-full bg-dark-300 border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-blue transition resize-none'
                />
              </div>

              <button 
                type='submit' 
                className='w-full px-6 py-3 bg-blue text-white rounded-lg font-medium hover:bg-opacity-80 transition duration-300'
              >
                Send Message
              </button>
            </form>
          </Motion.div>

          {/* Contact Information */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className='space-y-8'
          >
            <div className='flex items-start gap-4'>
              <div className='text-blue text-3xl mt-1'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>avirupsarkar447@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='text-blue text-3xl mt-1'>
                <FaPhone />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 7439464612</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='text-blue text-3xl mt-1'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Kolkata, Sodepur</p>
              </div>
            </div>

            <div className='pt-6'>
              <h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
              <div className='flex gap-4 '>
                <a 
                  href='https://www.linkedin.com/in/avirup-sarkar' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  aria-label='LinkedIn profile'
                  className='w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'
                >
                  <FaLinkedin className='text-xl' />
                </a>
                <a 
                  href='https://github.com/AVIRUP182' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  aria-label='GitHub profile'
                  className='w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'
                >
                  <FaGithub className='text-xl' />
                </a>
                {/* <a 
                  href='#' 
                  className='w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'
                >
                  <FaTwitter className='text-xl' />
                </a> */}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </Motion.div>
  )
}

export default Contact
