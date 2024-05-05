"use client"
import BlogTile from "@/components/BlogTile";
import { useEffect, useState } from "react";

export default function Home() {

  const [blogData, setBlogData] = useState(null)

  useEffect(() => {
      fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogData(data))
  }, []);

  console.log(blogData, "BLOG DATA")

  return (
    <div>
      <div className="p-6 flex flex-col justify-center items-center">
        <h1>The Blog Room</h1>
        <p className="mt-4 max-w-screen-md text-center text-wrap">The Blog Room: Your Gateway to Insightful Articles and Engaging Stories. Explore a diverse collection of topics, from technology and lifestyle to culture and beyond. Dive into thought-provoking content curated to inform, inspire, and entertain.</p>
      </div>
      <div className='mt-8 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
        {
          blogData?.map(blog => (
            <>
              <BlogTile blog={blog} />
            </>
          ))
        }
      </div>
      
    </div>
  );
}