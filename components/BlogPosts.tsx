import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function BlogPosts() {
  return (
    <div className="py-12 lg:py-16 px-2 lg:px-28">
      <div className="flex items-center">
        <div className="border-t border-gray-400 flex-grow"></div>
        <div className="text-xl lg:text-3xl text-center font-bold mx-1">
          Helpful <span className="text-purple-600">Resourses</span>
        </div>
        <div className="border-t border-gray-400 flex-grow"></div>
      </div>
      <p className="text-gray-500 text-xs lg:text-sm text-center my-1">
        Empowering Hope, One Resource at a Time{" "}
      </p>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-2">
        {/* ======Blog 1====== */}
        <Link
          className="flex items-end lg:col-span-6 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] p-6 bg-cover h-72"
          href={
            "/blog/blog-1?How to Manage Gender-Based Violence: A Guide to Empowerment and Support"
          }
        >
          <div>
            <h1 className="text-white text-xl lg:text-3xl font-bold">
              How to Manage Gender-Based Violence:<br></br> A Guide to
              Empowerment and Support
            </h1>
          </div>
        </Link>

        {/* =========Blog 2========== */}
        <div className="lg:col-span-3 shadow-lg shadow-gray-200 h-72">
          <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hands.jpg')] h-44 w-full bg-cover"></div>
          <div className="p-2">
            <h1 className="text-sm mb-2">
              Breaking the Silence: Empowering Survivors to Share Their Stories
            </h1>
            <Link
              href={
                "/blog/blog-2?Breaking the Silence: Empowering Survivors to Share Their Stories"
              }
              className="font-extrabold text-purple-800 text-sm flex items-center"
            >
              View Article
              <FaArrowRight className="animate-bounce" />
            </Link>
          </div>
        </div>

        {/* ========Blog 3======== */}
        <div className="lg:col-span-3 shadow-lg shadow-gray-200 h-72">
          <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] h-44 w-full bg-cover"></div>
          <div className="p-2">
            <h1 className="text-sm mb-2">
              Educating the Next Generation: Implementing Anti-Violence Programs
              in Schools
            </h1>
            <Link
              href={
                "/blog/blog-3?Educating the Next Generation: Implementing Anti-Violence Programs in Schools"
              }
              className="font-extrabold text-purple-800 text-sm flex items-center"
            >
              View Article
              <FaArrowRight className="animate-bounce" />
            </Link>
          </div>
        </div>
      </div>

      {/* ======Second Blog Columns======= */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-2">
        {/* ==========Blog 4========== */}
        <div className="lg:col-span-3 shadow-lg shadow-gray-200 h-72">
          <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] h-40 w-full bg-cover"></div>
          <div className="p-2">
            <h1 className="text-sm mb-2">
              The Intersectionality of Gender-Based Violence: Addressing Unique
              Challenges
            </h1>
            <Link
              href={
                "/blog/blog-4?The Intersectionality of Gender-Based Violence: Addressing Unique Challenges"
              }
              className="font-extrabold text-purple-800 text-sm flex items-center"
            >
              View Article
              <FaArrowRight className="animate-bounce" />
            </Link>
          </div>
        </div>

        {/* ============Blog 5======== */}
        <div className="lg:col-span-3 shadow-lg shadow-gray-200 h-72">
          <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] h-40 w-full bg-cover"></div>
          <div className="p-2">
            <h1 className="text-sm mb-2">
              Community Allies: How Men Can Stand Against Gender-Based Violence
            </h1>
            <Link
              href={
                "/blog/blog-5?Community Allies: How Men Can Stand Against Gender-Based Violence"
              }
              className="font-extrabold text-purple-800 text-sm flex items-center"
            >
              View Article
              <FaArrowRight className="animate-bounce" />
            </Link>
          </div>
        </div>

        {/* =======Blog 6========= */}
        <Link
          className="flex items-end lg:col-span-6 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] p-6 bg-cover h-72"
          href={
            "/blog/blog-6?Understanding Coercive Control: Unveiling the Dynamics of Abuse"
          }
        >
          <div>
            <h1 className="text-white text-xl lg:text-3xl font-bold">
              Understanding Coercive Control:<br></br> Unveiling the Dynamics of
              Abuse of Gender-Based Violence.
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogPosts;
