"use client"
import BlogTile from "@/components/BlogTile";
import { useEffect, useState } from "react";

export default function Home() {

  const [blogData, setBlogData] = useState(null)

  useEffect(() => {
      fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogData(JSON.parse(data)))
  }, []);

  console.log(blogData, "BLOG DATA")

  return (
    <div className='min-h-screen'>
      <div className='border-2 border-yellow-400'>
        {
          blogData.map(blog => (
            <>
              <BlogTile blog={blog} />
            </>
          ))
        }
      </div>
    </div>
  );
}