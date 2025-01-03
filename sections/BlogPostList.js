"use client";

import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";

// BlogPostForm component to handle form submission
const BlogPostForm = ({ onAddPost }) => {
  // State to handle form inputs
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [blogUrl, setBlogUrl] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !subtitle || !imageUrl || !blogUrl) {
      alert("Please fill in all fields.");
      return;
    }

    // Set the product data on form submission
    const newProductData = {
      title,
      subtitle,
      imageUrl,
      blogUrl,
      date,
    };

    onAddPost(newProductData); // Pass the new blog post to the parent component
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 ">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">Submit Your Blog Post</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 ">
          {/* Blog Title */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-white">Blog Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-yellow-300 rounded-md bg-[#101010] text-white focus:outline-none"
            />
          </div>

          {/* Blog Subtitle */}
          <div>
            <label htmlFor="subtitle" className="block text-lg font-medium text-white">Blog Subtitle</label>
            <input
              type="text"
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-yellow-300 rounded-md bg-[#101010] text-white focus:outline-none"
            />
          </div>

          {/* Blog Image URL */}
          <div>
            <label htmlFor="imageUrl" className="block text-lg font-medium text-white">Image URL</label>
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-yellow-300 rounded-md bg-[#101010] text-white focus:outline-none"
            />
          </div>

          {/* Blog URL */}
          <div>
            <label htmlFor="blogUrl" className="block text-lg font-medium text-white">Your Blog URL</label>
            <input
              type="url"
              id="blogUrl"
              value={blogUrl}
              onChange={(e) => setBlogUrl(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-yellow-300 rounded-md bg-[#101010] text-white focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition-all"
          >
            Submit Blog Post
          </button>
        </form>
      ) : (
        // Show the product (or blog) once the form is submitted
        <div className="relative flex flex-col items-center rounded-xl shadow-lg bg-neutral-900 p-6">
          <Link href={blogUrl}>
            <img
              src={imageUrl}
              className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
              alt={title}
            />
          </Link>
          <div className="text-center mt-4">
            <p className="uppercase font-semibold text-xs mb-2.5 text-yellow-400">{date}</p>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="mb-4 text-gray-300">{subtitle}</p>

            {/* Optional Reviews Section */}
            <button
              className="font-medium underline text-yellow-500"
            >
              Show Reviews
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// BlogPostList component to manage and display the blog posts
const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to add a new post to the list
  const handleAddPost = (newPost) => {
    setBlogPosts([...blogPosts, newPost]);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-yellow-300">Your Blog Posts</h1>
        <button
          className="bg-yellow-500 text-black py-2 font-bold px-4 rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Add Blog Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="relative flex flex-col items-center rounded-xl shadow-lg bg-neutral-900 p-6">
            <Link href={post.blogUrl}>
              <img
                src={post.imageUrl}
                className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                alt={post.title}
              />
            </Link>
            <div className="text-center mt-4">
              <p className="uppercase font-semibold text-xs mb-2.5 text-yellow-400">{post.date}</p>
              <h2 className="text-2xl font-bold text-white">{post.title}</h2>
              <p className="mb-4 text-gray-300">{post.subtitle}</p>

              {/* Optional Reviews Section */}
              <button
                className="font-medium underline text-yellow-500"
              >
                Show Reviews
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Blog Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#101010] p-8 rounded-lg w-100">
            <BlogPostForm onAddPost={handleAddPost} />
            <button
              className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
