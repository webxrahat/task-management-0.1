import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-600 text-lg">
            We provide top-quality solutions to boost your business. Explore our
            services and let us help you grow online with innovative technology
            and expert strategies.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Hero Visual"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
