import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTop from "../Layout/PageTop";

const Blog = () => {
  const defaultPosts = [
    {
      title: "Exploring the Power of AI",
      image: "ai.png",
      author: "Nitish Sharma",
      date: "2025-04-10",
    },
    {
      title: "Mastering Instagram in 2025",
      image: "insta.png",
      author: "Nitish sharma",
      date: "2025-04-11",
    },
  ];

  const [posts] = useState(defaultPosts);
  const recentPosts = posts.slice(0, 4);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  
  

  return (
    <>
      {/* Header Section */}
     
      <PageTop
        title="Explore Our Latest Insights"
        currentPage="Blog"
      />

      {/* Featured Post Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article
          className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group bg-white"
          data-aos="zoom-in"
        >
          <div className="relative overflow-hidden rounded-t-3xl">
            <img
              src={recentPosts[0]?.image}
              alt={recentPosts[0]?.title}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="p-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              {recentPosts[0]?.title}
            </h2>
            <p className="text-indigo-600 font-medium mb-2">
              By <span className="font-semibold">{recentPosts[0]?.author}</span>
            </p>
            <time className="text-gray-400">{recentPosts[0]?.date}</time>
            <p className="mt-6 text-gray-700">
              A deep dive into how AI is transforming industries and reshaping the future...
            </p>
          </div>
        </article>

        {/* Recent Posts Sidebar */}
        <aside
          className="flex flex-col gap-6"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
            Recent Posts
          </h3>
          {recentPosts.map((post, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h4 className="font-bold text-lg text-gray-900">{post.title}</h4>
                <p className="text-indigo-600 font-medium">By {post.author}</p>
                <p className="text-gray-400 text-sm">{post.date}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>

      {/* All Posts Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-extrabold text-center text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Explore More Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                data-aos="flip-left"
                data-aos-delay={idx * 150}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-1">
                    By {post.author}
                  </p>
                  <time className="text-gray-400 text-sm">{post.date}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
