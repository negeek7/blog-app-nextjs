import { createNewBlogApiCaller, updateBlogPostApiCaller } from '@/apiCaller/blogApiCaller'
import React, { useState } from 'react'

function AddNewBlogModal({onClose, blog, isEditing}) {

  const [blogTitle, setBlogTitle] = useState(blog ? blog.title : '')
  const [blogContent, setBlogContent] = useState(blog ? blog.content : '')
  const [blogSummary, setBlogSummary] = useState(blog ? blog.summary : '')
  const [error, setError] = useState({title: false, content: false})

  console.log(isEditing, "BLOGGGGG")

  const handleInput = (e) => {
    e.target.id === "blog_title" ? 
      setBlogTitle(e.target.value) : e.target.id === 'blog_summary' ? 
      setBlogSummary(e.target.value) : setBlogContent(e.target.value)
  }

  const getBlogData = () => {
    return {
      title: blogTitle,
      summary: blogSummary,
      content: blogContent,
      editable: true
    }
  }

  const handleBlogSubmit = () => {
    if(!isEditing){
      createNewBlogApiCaller('/api/blogs', getBlogData())
      .then(() => onClose())
    } else {
      updateBlogPostApiCaller('/api/blogs', {...getBlogData(), id: blog.id})
      .then(() => onClose())
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 border-lime-400">
        <div className="fixed inset-0 bg-black opacity-50"></div>

        
        <div className="relative bg-slate-900 p-4 rounded-lg z-10 border-lime-400 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] lg:w-2/4 md:w-80">
            <div className="flex justify-between">
                <div>Add new blog</div>
                <span className="cursor-pointer" onClick={onClose}>
                    <i className="ph ph-x text-blue-300"></i>
                </span>
                
            </div>
            <div className="pt-4">
                <div className="relative z-0">
                    <input 
                        type="text" 
                        id="blog_title" 
                        autoComplete="off"
                        placeholder="Blog Title Here..." 
                        className='w-full p-2 rounded-md bg-transparent outline-none text-2xl'
                        value={blogTitle}
                        onChange={(e) => handleInput(e)}
                        />
                    {/* <label htmlFor="title_playlist" className='none'>Title</label> */}
                </div>
                <div className="relative z-0 mt-6">
                    <textarea 
                        type="textarea" 
                        id="blog_summary" 
                        placeholder="Blog Summary..." 
                        autoComplete="off"
                        className='w-full px-2 rounded-md bg-transparent outline-none text-wrap resize-none'
                        value={blogSummary}
                        onChange={(e) => handleInput(e)}
                    />
                    {/* <label htmlFor="description_playlist">Description</label> */}
                </div>
                <div className="relative z-0 mt-6">
                    <textarea 
                        type="text" 
                        id="blog_content" 
                        placeholder="Blog Content..."
                        autoComplete="off"
                        className='w-full p-2 rounded-md h-72 bg-transparent outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] resize-none'
                        value={blogContent}
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                {/* <>
                    {
                        (error.title || error.description) && showErrorMessage()
                    }
                </> */}
                <div className="flex justify-end mt-8 gap-6">
                    <button className="text-xs text-center text-white border border-none rounded-lg outline-none" onClick={onClose}>
                        Cancel
                    </button>
                    <button 
                        className="text-xs text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none px-3 py-2 border border-none outline-none rounded-lg"
                        onClick={handleBlogSubmit}
                    >
                        {isEditing ? "Update" : "Post"}
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default AddNewBlogModal