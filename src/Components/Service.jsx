import React from 'react';
import itconsultency from '../assets/Itconsultency.avif';
import itsupport from '../assets/itsupport.avif';
import securitysolution from '../assets/securitysolution.jpg';

const Service = () => {
  const services = [
    {
      title: 'IT Consultancy',
      description: 'Expert guidance to help you develop and implement effective IT strategies that align with your business goals.',
      backgroundImage: itconsultency,
    },
    {
      title: 'IT Support Solutions',
      description: 'Reliable and responsive IT support to ensure your systems run smoothly and efficiently.',
      backgroundImage: itsupport,
    },
    {
      title: 'Security Solutions',
      description: 'Comprehensive security services to protect your business from physical and digital threats.',
      backgroundImage: securitysolution,
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300 w-full md:w-1/3 text-center relative overflow-hidden"
            style={{
              backgroundImage: `url(${service.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-200">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 pb-2">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-5 rounded transition duration-300">
          See All Services &rarr;
        </button>
      </div>
    </>
  );
};

export default Service;
