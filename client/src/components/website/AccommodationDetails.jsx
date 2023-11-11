import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AccommodationDetails = () => {
  const { type } = useParams();
  const [destination, setDestination] = useState(null);

  //   carousel images
  const images = [
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/385542203.jpg?k=44f98623a32195ef2c7ce0fcd0f4d4fd99057a6277d1b54fc884f1756670396a&o=&hp=1",
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/453833024.jpg?k=31d4a578139ec96d135c27eaf0ff787adce55b533ebffddddf8c31c6b6c8818e&o=&hp=1",
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/432525446.jpg?k=d17d4e47362bc172ac80b56f63c11632b2c14407380636caae54bd3cb1d9dd2d&o=&hp=1",
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/359056434.jpg?k=065fb27e9abcb4f61f1c6932e9cb57b2eb46af7f062c602522400b9f391166ca&o=&hp=1",
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/326714529.jpg?k=b652add7e62b83cb51ab4849db4b7ef8a26bd9232b86488417e496aab1334479&o=&hp=1",
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/351768928.jpg?k=574991b267087079b1b22cd655938369b1f0c485ed71c773ab182a2528cdd8fd&o=&hp=1",
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/326714728.jpg?k=bbe441f4411b6d2e9d7465281c6da18f9900b39d09b4e4ed9230adced402a336&o=&hp=1",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  //   end carousel images
  const handleChange = () => {};
  const handleSubmit = () => {};

  useEffect(() => {
    axios
      .get(`http://localhost:5000/destinations?destinations_type=${type}`)
      .then((response) => {
        // Handle the response data here
        setDestination(response.data[0]);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
      {/* <div className="w-full h-96 bg-cover bg-[50%] bg-[url('https://cdn.pixabay.com/photo/2017/06/04/16/32/new-york-2371488_960_720.jpg')]"></div> */}
      <div
        id="default-carousel"
        className="relative w-auto md:mx-36"
        data-carousel="slide"
      >
        <div className="relative h-96 overflow-hidden rounded-lg">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={images[currentImage]}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <button
          onClick={prevSlide}
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={nextSlide}
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center my-10">
        <div className="w-2/3">
          {destination && (
            <div className="flex flex-col gap-10">
              {/* title */}
              <h1 className="text-sky-700 text-start text-3xl font-bold">
                {destination.title}
              </h1>
              <h5 className="text-start text-xl">
                {destination.destinations_details}
              </h5>
              <div className="flex justify-between">
                {/* amenities */}
                <div className="flex flex-col gap-6">
                  <h1 className="text-sky-700 text-start text-3xl font-bold">
                    Amenities
                  </h1>
                  <ol className="text-start text-xl list-disc list-inside">
                    <li>Free Wi-Fi</li>
                    <li>Free parking</li>
                  </ol>
                  <h1 className="text-sky-700 text-start text-3xl font-bold">
                    Price
                  </h1>
                  <h5 className="text-start text-xl">30.5 JOD</h5>
                </div>
                {/* location */}
                <div className="w-1/2">
                  <h5 className="text-start text-sky-700 text-2xl font-bold">
                    Location
                  </h5>
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217782.0981603825!2d34.446245060239825!3d31.473441914110314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2sus!4v1699644333625!5m2!1sen!2sus"
                    allowFullScreen
                  />
                </div>
              </div>
              {/* others */}
              <div className="py-12">
                <h5 className="text-start text-sky-700 text-2xl font-bold pb-10">
                  Other Accommodations in Jordan
                </h5>
                <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center mx-auto">
                  {/* {destinations.map((destination, id)=>( */}
                  {/* <Link key={id} to="/"> */}
                  <Link to="/">
                    <article className="max-w-[20rem] shadow-xl bg-cover bg-center overflow-hidden h-[410px] transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://afhomeph.com/cdn/shop/files/Website_Banner_Direct_from_the_Factory_1.png?v=1685417210&width=2800')]">
                      <div className="text-start hover:bg-[#12243a8f] bg-opacity-20 h-full px-5 flex flex-wrap flex-col pt-44 hover:bg-opacity-75 transform duration-300">
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
                  {/* ))} */}
                </div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="min-h-screen flex justify-center items-start md:items-center">
                    <div className="py-12 px-12 w-full">
                      <div className="flex flex-col justify-center">
                        <h1 className="text-3xl text-sky-900 font-bold text-start mb-4 cursor-pointer">
                          Hotel booking
                        </h1>
                      </div>
                      <div className="space-y-4 flex flex-col justify-center items-center">
                        <label className="px-3 self-start">Name</label>
                        <div className="flex w-full gap-5">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                          <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                        </div>
                        <label className="px-3 self-start">Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          onChange={handleChange}
                          className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                        />
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          onChange={handleChange}
                          className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                        />
                        <label className="px-3 self-start">
                          Room preference
                        </label>
                        <div className="flex flex-wrap gap-6 self-start px-3">
                          <div class="flex items-center">
                            <input
                              checked
                              id="default-radio-1"
                              type="radio"
                              value=""
                              name="default-radio"
                              class="w-4 h-4 text-sky-900 bg-gray-100 border-gray-300"
                            />
                            <label
                              for="default-radio-1"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Standard
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="default-radio-2"
                              type="radio"
                              value=""
                              name="default-radio"
                              class="w-4 h-4 text-sky-900 bg-gray-100 border-gray-300"
                            />
                            <label
                              for="default-radio-2"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Delux
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="default-radio-2"
                              type="radio"
                              value=""
                              name="default-radio"
                              class="w-4 h-4 text-sky-900 bg-gray-100 border-gray-300"
                            />
                            <label
                              for="default-radio-2"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Suite
                            </label>
                          </div>
                        </div>
                        <label className="px-3 self-start">Guests</label>
                        <div className="flex self-start w-1/2 gap-5">
                          <input
                            type="number"
                            name="adults"
                            placeholder="Adults"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                          <input
                            type="number"
                            name="children"
                            placeholder="Children"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          type="submit"
                          className="py-3 w-64 text-xl text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetails;
// images carousel is not complete
