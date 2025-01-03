'use client'

import { useState } from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import BlogPostList from "./BlogPostList";


export default function BlogPost() {
  // States for reviews and input form
  const [reviews1, setReviews1] = useState([
    { name: "Alice", message: "Great post! Really helped me understand JavaScript closures." },
    { name: "Bob", message: "Excellent explanation of async/await. Keep up the good work!" },
    { name: "Charlie", message: "I learned a lot about event loops. Thanks for sharing!" },
  ]);

  const [reviews2, setReviews2] = useState([
    { name: "Dave", message: "Fantastic breakdown of React hooks! Very informative." },
    { name: "Eve", message: "This was a great guide to understanding state management." },
    { name: "Frank", message: "I have been struggling with React and this article cleared things up!" },
  ]);

  const [reviews3, setReviews3] = useState([
    { name: "Grace", message: "This post on TypeScript helped me understand the basics so much better." },
    { name: "Heidi", message: "Clear and concise. I’m definitely implementing these tips in my next project." },
    { name: "Ivan", message: "TypeScript made easier to understand. Thanks for the detailed explanation!" },
  ]);

  const [reviewInput1, setReviewInput1] = useState("");
  const [reviewInput2, setReviewInput2] = useState("");
  const [reviewInput3, setReviewInput3] = useState("");

  const handleReviewSubmit = (postId) => {
    const newReview = {
      name: "Anonymous",
      message: postId === 1 ? reviewInput1 : postId === 2 ? reviewInput2 : reviewInput3,
    };

    if (postId === 1) {
      setReviews1((prev) => [...prev, newReview]);
      setReviewInput1(""); // Clear input after submission
    } else if (postId === 2) {
      setReviews2((prev) => [...prev, newReview]);
      setReviewInput2("");
    } else {
      setReviews3((prev) => [...prev, newReview]);
      setReviewInput3("");
    }
  };

  const [showReviews1, setShowReviews1] = useState(false);
  const [showReviews2, setShowReviews2] = useState(false);
  const [showReviews3, setShowReviews3] = useState(false);

  return (
    <section className="bg-[#171717]">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-white mb-4">Discover New Adventures in Programming</h1>
        <p className="text-lg text-gray-400">Explore, discover, and find inspiration through these exciting programming journeys.</p>
      </div>

      <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 - JavaScript Closures */}
          <div className="relative flex flex-col items-center rounded-xl shadow-lg bg-neutral-900 p-6">
            <Link href="/blog/js-closures">
              <img
                src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732915627/project-logo3_evscpg.webp"
                className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                alt="JavaScript"
              />
            </Link>
            <div className="text-center">
              <p className="uppercase font-semibold text-xs m-2.5 text-yellow-400">September 10th 2023</p>
              <h2 className="text-2xl font-bold text-white">Understanding JavaScript Closures</h2>
              <p className="mb-4 text-gray-300">Learn the fundamentals of closures in JavaScript and how they can improve your coding skills.</p>

              <button
                onClick={() => setShowReviews1(!showReviews1)}
                className="font-medium underline text-yellow-500"
              >
                {showReviews1 ? "Hide Reviews" : "Show Reviews"}
              </button>

              {/* Reviews Section */}
              {showReviews1 && (
                <div className="mt-4 w-full">
                  {reviews1.map((review, index) => (
                    <div key={index} className="bg-neutral-800 p-4 rounded-lg mt-3">
                      <h4 className="font-semibold text-yellow-400">{review.name}</h4>
                      <p className="text-gray-300">{review.message}</p>
                    </div>
                  ))}
                  {/* Add Review Form */}
                  <div className="mt-4">
                    <textarea
                      value={reviewInput1}
                      onChange={(e) => setReviewInput1(e.target.value)}
                      placeholder="Add a review..."
                      className="w-full p-2 text-white bg-neutral-800 border border-gray-700 rounded-md mb-2"
                    ></textarea>
                    <button
                      onClick={() => handleReviewSubmit(1)}
                      className="bg-yellow-500 text-black p-2 rounded-md"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Blog Post 2 - React Hooks */}
          <div className="relative flex flex-col items-center rounded-xl shadow-lg bg-neutral-900 p-6">
            <Link href="/blog/react-hooks">
              <img
                src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1735864175/Reactlogo_qyx5nr.webp"
                className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                alt="React"
              />
            </Link>
            <div className="text-center">
              <p className="uppercase font-semibold text-xs m-2.5 text-yellow-400">September 15th 2023</p>
              <h2 className="text-2xl font-bold text-white">Mastering React Hooks</h2>
              <p className="mb-4 text-gray-300">A comprehensive guide to understanding and implementing React hooks in your projects.</p>

              <button
                onClick={() => setShowReviews2(!showReviews2)}
                className="font-medium underline text-yellow-500"
              >
                {showReviews2 ? "Hide Reviews" : "Show Reviews"}
              </button>

              {/* Reviews Section */}
              {showReviews2 && (
                <div className="mt-4 w-full">
                  {reviews2.map((review, index) => (
                    <div key={index} className="bg-neutral-800 p-4 rounded-lg mt-3">
                      <h4 className="font-semibold text-yellow-400">{review.name}</h4>
                      <p className="text-gray-300">{review.message}</p>
                    </div>
                  ))}
                  {/* Add Review Form */}
                  <div className="mt-4">
                    <textarea
                      value={reviewInput2}
                      onChange={(e) => setReviewInput2(e.target.value)}
                      placeholder="Add a review..."
                      className="w-full p-2 text-white bg-neutral-800 border border-gray-700 rounded-md mb-2"
                    ></textarea>
                    <button
                      onClick={() => handleReviewSubmit(2)}
                      className="bg-yellow-500 text-black p-2 rounded-md"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Blog Post 3 - TypeScript Basics */}
          <div className="relative flex flex-col items-center rounded-xl shadow-lg bg-neutral-900 p-6">
            <Link href="/blog/typescript-basics">
              <img
                src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1735863939/TypeScript_k6nwia.webp"
                className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                alt="TypeScript"
              />
            </Link>
            <div className="text-center">
              <p className="uppercase font-semibold text-xs m-2.5 text-yellow-400">October 5th 2023</p>
              <h2 className="text-2xl font-bold text-white">Introduction to TypeScript</h2>
              <p className="mb-4 text-gray-300">Get started with TypeScript and learn how to use static types to make your code more robust and maintainable.</p>

              <button
                onClick={() => setShowReviews3(!showReviews3)}
                className="font-medium underline text-yellow-500"
              >
                {showReviews3 ? "Hide Reviews" : "Show Reviews"}
              </button>

              {/* Reviews Section */}
              {showReviews3 && (
                <div className="mt-4 w-full">
                  {reviews3.map((review, index) => (
                    <div key={index} className="bg-neutral-800 p-4 rounded-lg mt-3">
                      <h4 className="font-semibold text-yellow-400">{review.name}</h4>
                      <p className="text-gray-300">{review.message}</p>
                    </div>
                  ))}
                  {/* Add Review Form */}
                  <div className="mt-4">
                    <textarea
                      value={reviewInput3}
                      onChange={(e) => setReviewInput3(e.target.value)}
                      placeholder="Add a review..."
                      className="w-full p-2 text-white bg-neutral-800 border border-gray-700 rounded-md mb-2"
                    ></textarea>
                    <button
                      onClick={() => handleReviewSubmit(3)}
                      className="bg-yellow-500 text-black p-2 rounded-md"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BlogPostList/>
    </section>
  );
}
