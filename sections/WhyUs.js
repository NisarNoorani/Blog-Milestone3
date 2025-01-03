import React from "react";
import { FaPalette, FaBolt, FaTools } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="bg-[#171717] flex items-center justify-center">
      <section
        id="features"
        className="relative block px-6 py-20 md:py-32 md:px-10 border-t border-b border-neutral-800 bg-neutral-900/30 w-full"
      >
        {/* Enhanced Separator */}
        <div className="absolute -top-10 left-0 w-full flex justify-center">
          <div className="w-3/4 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full"></div>
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-4 flex items-center justify-center font-medium uppercase tracking-wider hover:scale-105 transition-all">
            Why Choose Us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-yellow-300 to-yellow-500 bg-clip-text font-bold text-transparent text-5xl sm:text-6xl hover:scale-105 pb-1 transition-transform duration-300">
            Unleash the Power of Your Words with Blog Sphere
          </h2>
          <p className="mx-auto my-6 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400 hover:scale-105 transition-all duration-300">
            Our platform empowers you to share your stories and ideas with a global community. Create, connect, and inspire like never before.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-20 sm:grid-cols-2 lg:grid-cols-3">
          {/* Customizable */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-10 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-md border bg-gradient-to-r from-yellow-400 to-yellow-600">
              <FaPalette className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-400 text-xl hover:scale-105 transition-transform">
              Customizable
            </h3>
            <p className="my-6 font-normal leading-relaxed tracking-wide text-gray-400">
              Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page.
            </p>
          </div>

          {/* Fast Performance */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-10 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-md border bg-gradient-to-r from-yellow-400 to-yellow-600">
              <FaBolt className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-400 text-xl hover:scale-105 transition-transform">
              Fast Performance
            </h3>
            <p className="my-6 font-normal leading-relaxed tracking-wide text-gray-400">
              We build our templates for speed in mind, for super-fast load times so your customers never waver.
            </p>
          </div>

          {/* Fully Featured */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-10 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-md border bg-gradient-to-r from-yellow-400 to-yellow-600">
              <FaTools className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-400 text-xl hover:scale-105 transition-transform">
              Fully Featured
            </h3>
            <p className="my-6 font-normal leading-relaxed tracking-wide text-gray-400">
              Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.
            </p>
          </div>
        </div>

        {/* Decorative Gradients */}
        <div
          className="absolute bottom-0 left-0 z-0 h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(253, 224, 71, 0.05) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(253, 224, 71, 0.05) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default WhyUs;
