import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch , FaLinkedin} from "react-icons/fa";
import logo from '../assets/Techmate New Logo-2024.jpg'; // Update the path accordingly

const contactDetails = [
  {
    title: "Contact Us",
    items: [
      "Phone: 04 254 5858",
      "WhatsApp: +97155 208 1023",
      "Email: info@techmate.me",
      "Address: Business Venue Building, 101,Oud Metha, Dubai, UAE  "
   
      
    ]
  }
];

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, link: "https://m.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaLinkedin, link: "https://www.linkedin.com/" },

];

const Footer = () => {
  return (
    <div className="w-full  bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-600 py-8">
        <div className="flex justify-center md:justify-start">
          {/* <img src={logo}  alt="Company Logo" className="h-24 w-36" /> */}
          <h3 className="ml-10 block font-extrabold text-white  text-xl ">
      <h1 className="text-2xl font-extrabold sm:text-5xl" style={{ fontFamily: 'Signika, serif', lineHeight: '1.2' }}>
  Tech<span className="text-red-700">Mate</span>

</h1>

  <p className="text-sm font-medium text-white text-center" style={{ fontSize: '10px', marginTop: '-8px' }}>    INNOVATE.  INTEGRATE.   INSPIRE </p>
</h3>
        </div>
        <div className="mt-8 md:mt-0">
          {contactDetails.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} className="py-1 text-gray-500 hover:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 text-2xl">
          {socialLinks.map((link, index) => (
            <a href={link.link} key={index} target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-white">
              <link.icon />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2  mx-auto justify-between text-center text-gray-500">
        <p className="py-4">2022 TechMate IT solutions, LLC. All rights reserved</p>
    
      </div>
     
    </div>
  );
};

export default Footer;
