import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      number: '01',
      title: 'Expertise and Experience',
      description: ' With over 16 years in the IT industry, we bring unparalleled expertise to every project',
    },
    {
      number: '02',
      title: 'Dedicated Support',
      description: 'From consultancy to implementation and ongoing support, we are with you every step of the way.',
    },
    {
      number: '03',
      title: 'Customer-Centric Approach',
      description: ' We prioritize your needs and tailor our solutions to meet your specific requirements.',
    },
    {
      number: '04',
      title: 'Agile and Fast Working Style',
      description: 'This type of approach to our work helps our specialists to quickly sort problems and solutions.',
    },
    {
      number: '05',
      title: 'Quality and Reliability',
      description: ' Our products and services are of the highest quality, ensuring reliability and longevity.',
    },
    {
      number: '06',
      title: 'Cost-Effective Solutions',
      description: ' We provide affordable IT solutions without compromising on quality or performance',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-500 mr-2">{feature.number}</span>
                <hr className="flex-grow border-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;