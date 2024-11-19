"use client";
import { useEffect, useState } from "react";
import postService from "../api/post-service";
import BlogCard from "./Blog/BlogCard";
import { BlogCardData } from "../utils/data";

const BlogSection = () => {
  const sortedBlogCardData = BlogCardData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
      <div>
        <p className="font-bold text-lg sm:text-xl mb-2">
          I write about things I learn
        </p>
      </div>
      <div className="py-3 space-y-4 sm:space-y-6">
        {sortedBlogCardData.map((item, index) => {
          return (
            <div key={item?.id} className="w-full">
              <BlogCard item={item} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
