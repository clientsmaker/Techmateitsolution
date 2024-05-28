import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import image from "../../assets/homecard1.jpg";
import Service from "../../Components/Service";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Stats from "../../Components/Stats";
import Reviews from "../../Components/Reviews";
import NewsSection from "../../Components/NewsSection";
import Footer from "../../Components/Footer";
import product1 from "../../assets/desk1.jpg";
import product2 from "../../assets/lap1.jpg";
import product3 from "../../assets/cctc.jpg";
import product4 from "../../assets/servers.jpg";
import product5 from "../../assets/print1.jpg";
import product6 from "../../assets/cmptracc.jpg";
import ProductCard from "../../Components/Card/ProductCard";

const Home = () => {
  const products = [
    {
      image: product1,
      description: "Desktop",
      path: "/watertank-cleaning",
    },
    { image: product2, description: "Laptop", path: "/pest-control" },
    {
      image: product3,
      description: "Security Camera",
      path: "/aircondition-check",
    },
    {
      image: product4,
      description: "Servers",
      path: "/home-maintanance",
    },
    {
      image: product5,
      description: "Printer",
      path: "/office-maintanance",
    },
    {
      image: product6,
      description: "Computer Accessories",
      path: "/purity-checking",
    },
  ];
  return (
    <>
      <Navbar />
      <div
        className="relative h-screen flex items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute left-0 ml-8 text-start text-black px-4">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Comprehensive IT Solutions for Your Business
          </h1>
          <p className="mb-8 font-medium">
            We offer a wide range of IT services designed to help your business
            thrive in the digital age. From strategic   <br />IT
           consultancy to robust support solutions and state-of-the-art
            security services, we have the expertise to <br /> keep your
            operations running smoothly and securely.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        {/* <div className="bg-white p-4 rounded shadow-lg flex items-center">
          <img src="https://via.placeholder.com/40" alt="Chat Avatar" className="rounded-full mr-2" />
          <span>Hi! What can I do for you?</span>
        </div> */}
      </div>

      <h1 className="text-4xl font-bold text-center p-2">Our Services</h1>
      <Service />
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-8 text-center">
        OUR PRODUCTS
      </h1>
      <div className="flex justify-center flex-wrap gap-8 mt-8">
        {products.map((product, index) => (
          <Link to={product.path} key={index}>
            <ProductCard
              image={product.image}
              description={product.description}
            />
          </Link>
        ))}
      </div>
      <WhyChooseUs />
      <Stats />
      <Reviews />
      <NewsSection />
      <Footer />
    </>
  );
};

export default Home;
