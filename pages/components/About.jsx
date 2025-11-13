import React from "react";
import { motion as Motion } from "framer-motion";
import { assets, aboutInfo } from "../../src/assets/assets.js";

const About = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <Motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="Avirup Sarkar Profile"
            />
          </div>
          {/* My Journey */}
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Hi, I’m Avirup Sarkar, a passionate Frontend Developer skilled
                in HTML/CSS, React.js, JavaScript, Python, and C++. I focus on
                building responsive, fast, and interactive web interfaces with
                modern design principles. My strength lies in clean code,
                efficient problem-solving, and attention to detail.
              </p>
              <p className="text-gray-300 mb-12">
                I’ve completed my BCA (2025) and gained practical experience
                through an internship at Corizo. I’m comfortable working with
                APIs, dynamic components, and version control tools like Git. I
                constantly learn new technologies to stay ahead in the
                ever-evolving web industry. My goal is to craft seamless digital
                experiences that combine performance and creativity.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => {
                  const IconComponent = data.icon;
                  return (
                    <div
                      key={index}
                      className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <IconComponent className={`text-4xl mb-4 ${data.color}`} />
                      <h4 className="text-xl font-semibold mb-2">{data.title}</h4>
                      <p className="text-gray-400 text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </Motion.div>
  );
};

export default About;
