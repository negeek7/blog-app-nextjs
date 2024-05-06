"use client"
import BlogTile from "@/components/BlogTile";
import { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { createPortal } from "react-dom";
import AddNewBlogModal from "@/components/Modal/AddNewBlogModal";
import { getBlogApiCaller } from "@/apiCaller/blogApiCaller";
import DeleteBlogModal from "@/components/Modal/DeleteBlogModal";
import Spinner from "@/components/Spinner";

export default function Home() {

  const [blogData, setBlogData] = useState(null)
  const [isAddNewBlogOpen, setIsNewBlogOpen] = useState(false)
  const [isEditingBlog, setIsEditingBlog] = useState(false)
  const [actionableBlog, setActionableBlog] = useState(null)
  const [deleteModalState, setDeleteModalState] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchBlogData()
  }, []);

  const fetchBlogData = () => {
    setIsLoading(true)
    getBlogApiCaller('/api/blogs')
    .then(data => {
      setBlogData(data)
      setIsLoading(false)
    })
  }

  const blogActionHandler = (blog, action) => {
    setActionableBlog(blog)
    if(action === 'edit'){
      setIsNewBlogOpen(true)
      setIsEditingBlog(true)
    } else {
      setDeleteModalState(true)
    }
  }

  return (
    <div className="h-fit pb-10">
      <div className="p-6 flex flex-col justify-center items-center">
        <h1>The Blog Room</h1>
        <p className="mt-4 max-w-screen-md text-center text-wrap">The Blog Room: Your Gateway to Insightful Articles and Engaging Stories. Explore a diverse collection of topics, from technology and lifestyle to culture and beyond. Dive into thought-provoking content curated to inform, inspire, and entertain.</p>
      </div>
      {
        isLoading ?
        <div className="mt-40 text-center">
          <Spinner />
        </div>
        :
        <div className='mt-8 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
        {
          blogData?.map((blog, id) => (
            <>
              <BlogTile key={id} blog={blog} blogActionHandler={blogActionHandler} />
            </>
          ))
        }
      </div>
      }
      <div onClick={() => setIsNewBlogOpen(true)} className="fixed bottom-12 right-12 p-2 rounded-full bg-purple-950 cursor-pointer">
        <Plus size={32} />
      </div>

      {
        isAddNewBlogOpen &&
        createPortal(
          <AddNewBlogModal
            onClose={() => {
              setIsNewBlogOpen(false)
              setIsEditingBlog(false)
              setActionableBlog(null)
            }}
            title={isEditingBlog ? "Edit Blog" : "Add New Blog"}
            isEditing={isEditingBlog}
            blog={actionableBlog}
            fetchBlogData={fetchBlogData}
          />, document.body)
      }

      {
        deleteModalState &&
        createPortal(
          <DeleteBlogModal 
            onClose={() => setDeleteModalState(false)}
            blog={actionableBlog}
            fetchBlogData={fetchBlogData}
          />,
          document.body
        )
      }
      
    </div>
  );
}