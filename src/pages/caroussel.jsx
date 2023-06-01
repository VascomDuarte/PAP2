import React, { useState } from "react";
import Image from "next/image";

export default function KnowMore({ data }) {
  const [currentItem, setCurrentItem] = useState(0); // keep track of current item index
  const numItems = data?.dataIMG?.length;

  if (!data || !data.dataIMG) {
    return null;
  }

  const item = data.dataIMG[currentItem]; // get the item at the current index

  const handlePrevClick = () => {
    setCurrentItem((currentItem - 1 + numItems) % numItems); // wrap around to end of array
  };

  const handleNextClick = () => {
    setCurrentItem((currentItem + 1) % numItems); // wrap around to beginning of array
  };

  return (
    <div className="min-h-full flex items-center justify-center py-10 px-10 sm:px-6 lg:px-8 ">
      <div className="flex flex-col items-center justify-center mt-20 lg:space-x-10 ">
        {item && (
          <div
            id="indicators-carousel"
            className="relative"
            data-carousel="static"
            key={item.guid}
          >
            <div className="items-center justify-center w-96 md-8 overflow-visible rounded-lg sm:h-68">
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  id=""
                  type="button"
                  className="absolute z-30 flex items-center justify-center px-2 cursor-pointer group focus:outline-none right-96"
                  data-carousel-prev
                  onClick={handlePrevClick}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full sm:w-8 sm:h-8 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-white sm:w-5 sm:h-5 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  id=""
                  type="button"
                  className="absolute z-10 flex items-center justify-center px-2 cursor-pointer group focus:outline-none left-96 "
                  data-carousel-next
                  onClick={handleNextClick}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full sm:w-8 sm:h-8 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-white sm:w-5 sm:h-5 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
              <div
                className="bg-[#094c2d] border-4 border-[#094c2d] rounded-xl p-4"
                key={item.guid}
              >
                <h2 className="text-xl text-center">{item.title}</h2>
                <br />
                <div
                  className="duration-700 ease-in-out object-scale-down"
                  data-carousel-item="active"
                >
                  <img
                    src={item.edmIsShownBy}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="object-scale-down w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-1 left-1/2">
              {[...Array(numItems)].map((_, i) => (
                <button
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    i === currentItem ? "bg-white" : "bg-gray-300"
                  }`}
                  aria-current={i === currentItem}
                  aria-label={`Slide ${i + 1}`}
                  data-carousel-slide-to={i}
                  key={i}
                  onClick={() => setCurrentItem(i)}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}