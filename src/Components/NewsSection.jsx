import React from 'react';

const NewsSection = () => {
  const blogs = [
    {
      title: "Blog Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, quam at aliquam consectetur.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Blog Post 2",
      content: "Donec euismod, quam at aliquam consectetur, magna leo tincidunt nibh, eget tristique metus massa quis augue.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Blog Post 3",
      content: "Pellentesque at convallis odio. Donec sed odio dui. Pellentesque at convallis odio.",
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="  py-8 px-4 bg-gray-200">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Latest News</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex-1">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800">{blog.title}</h3>
              <p className="text-gray-700 mt-2">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  transition duration-300">
          See All News →
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
