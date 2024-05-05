"use client"
import BlogTile from "@/components/BlogTile";
import { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { createPortal } from "react-dom";
import AddNewBlogModal from "@/components/Modal/AddNewBlogModal";
import { getBlogApiCaller } from "@/apiCaller/blogApiCaller";

export default function Home() {

  const [blogData, setBlogData] = useState(null)
  const [isAddNewBlogOpen, setIsNewBlogOpen] = useState(false)
  const [isEditingBlog, setIsEditingBlog] = useState(false)
  const [editableBlog, setEditableBlog] = useState(null)

  useEffect(() => {
    getBlogApiCaller('/api/blogs')
      .then(data => setBlogData(data))

  }, []);

  const handleEditBlog = (blog) => {
    setEditableBlog(blog)
    setIsNewBlogOpen(true)
    setIsEditingBlog(true)
  }

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
              <BlogTile blog={blog} handleEditBlog={handleEditBlog} />
            </>
          ))
        }
      </div>
      <div onClick={() => setIsNewBlogOpen(true)} className="fixed bottom-14 right-16 p-2 rounded-full bg-purple-950 cursor-pointer">
        <Plus size={32} />
      </div>

      {
        isAddNewBlogOpen &&
        createPortal(<AddNewBlogModal 
            onClose={() => setIsNewBlogOpen(false)}
            title={isEditingBlog ? "Edit Blog" : "Add New Blog"}
            isEditing={isEditingBlog}
            blog={editableBlog}
            />, document.body)
      }
      
    </div>
  );
}