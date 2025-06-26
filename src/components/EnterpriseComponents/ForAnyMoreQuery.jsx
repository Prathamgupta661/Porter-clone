import React from "react";
import truckImg from "../../assets/Enterprises/enterprise_query.svg";

const ForAnyMoreQuery = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-20">
        FOR ANY MORE QUERY
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center rounded-xl shadow-lg bg-white p-8 md:p-16">
        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={truckImg}
            alt="Query Illustration"
            className="max-w-md w-full h-auto"
          />
        </div>
        {/* Text and Button */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
          <p className="mb-4 text-gray-700 text-sm">
            Reach us out on{" "}
            <span className="text-blue-700 font-bold inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block mr-1"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"></path>
              </svg>
              9667309777
            </span>{" "}
            today to know more about us and get benefits from our managed
            services offering. Our expert team will be happy to know more about
            your business and recommend the best possible solutions tailored to
            your logistics needs.
          </p>
          <button className="mt-8 px-5 py-4 rounded-md text-white font-bold text-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors">
            REQUEST CALLBACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForAnyMoreQuery;
