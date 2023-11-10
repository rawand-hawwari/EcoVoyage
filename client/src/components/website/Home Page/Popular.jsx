import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Popular = () => {
  
    const [destinations, setDestinations] = useState([]);

  // fetch products
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Only run the animation once
      });

    axios
      .get("http://localhost:5000/destinations?_limit=3")
      .then((response) => {
        // Handle the response data here
        setDestinations(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="mb-20">
      <h1 className="text-sky-700 text-4xl md:text-start md:mx-32 font-bold py-10">
        Popular Destinations
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center mx-auto">
        {destinations.map((destination, id)=>(
        <Link key={id} to="/">
          <article data-aos="fade-up" className="max-w-[20rem] shadow-xl bg-cover bg-center overflow-hidden h-[490px] transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://afhomeph.com/cdn/shop/files/Website_Banner_Direct_from_the_Factory_1.png?v=1685417210&width=2800')]">
            <div className="text-start hover:bg-[#12243a8f] bg-opacity-20 h-full px-5 flex flex-wrap flex-col pt-60 hover:bg-opacity-75 transform duration-300">
              <h1 className="text-white text-2xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                {destination.title}
              </h1>
              <div className="w-16 h-2 bg-sky-700 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
              <p className="my-3 py-3 opacity-0 max-h-[100px] overflow-hidden text-white text-xl group-hover:opacity-80 transform duration-500">
                {destination.destinations_details}
              </p>
            </div>
          </article>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;

//image is not from the server but static one