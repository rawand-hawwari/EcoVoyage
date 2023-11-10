import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Packages = () => {
    const [destinations, setDestinations] = useState([]);

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
    <div>
      
    </div>
  )
}

export default Packages
