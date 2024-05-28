import React from 'react';

function ReviewCard({ name, title, content }) {
  return (
    <div className="flex flex-col border rounded-lg shadow-md p-6 bg-white max-w-sm transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://picsum.photos/200" // replace with your avatar image
          alt="Avatar"
        />
        <div>
          <div className="font-medium text-lg">{name}</div>
          <div className="text-gray-500">{title}</div>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

function Reviews() {
  const reviews = [
    {
      name: 'Catherine Williams',
      title: 'Regular client',
      content:
        "PathSoft offers a high caliber of resources skilled in Microsoft Azure.NET, mobile and Quality Assurance. They became our true business partners over the past three years.",
    },
    {
      name: 'Rupert Wood',
      title: 'Regular client',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit consequuntur sequi eos beatae deleniti culpa cupiditate rerum. Similique, blanditiis rem perspiciatis fugiat voluptatem quas officiis ducimus reprehenderit.',
    },
    {
      name: 'Samantha Brown',
      title: 'Regular client',
      content:
        'We sincerely hope that each and every user entering our website will find exactly what they are looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.',
    },
  ];

  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold text-center mb-12">What People Say About Us</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
      {/* <div className="flex justify-center mt-8">
        <button className="text-blue-500 underline">See All Reviews →</button>
      </div> */}
    </div>
  );
}

export default Reviews;
