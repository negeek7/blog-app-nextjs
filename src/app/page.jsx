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
    <div className='min-h-screen'>
      <div className="p-6 flex flex-col justify-center items-center">
        <h1>The Blog Room</h1>
        <p className="mt-4 max-w-screen-md text-center text-wrap border-2 border-purple-600">The Blog Room: Your Gateway to Insightful Articles and Engaging Stories. Explore a diverse collection of topics, from technology and lifestyle to culture and beyond. Dive into thought-provoking content curated to inform, inspire, and entertain.</p>
      </div>
      <div className='m-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
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