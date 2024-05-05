import React, { useState } from 'react'

function AddNewBlogModal({onClose}) {

  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [blogSummary, setBlogSummary] = useState('')
  const [error, setError] = useState({title: false, content: false})


  const handleInput = (e) => {
    e.target.id === "blog_title" ? 
      setBlogTitle(e.target.value) : e.target.id === 'blog_summary' ? 
      setBlogSummary(e.target.value) : setBlogContent(e.target.value)
  }

  const handleNewBlogSubmit = () => {
    console.log("SUBMITTEDDD")
  }

  const inputStyling = {
    defaultStyling: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer",
    errorStyling: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
  }

  const labelStyling = {
    defaultStyling: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:orange:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    errorStyling: "absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 border-lime-400">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-slate-900 p-4 rounded-lg z-10 border-lime-400 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
            <div className="flex justify-between border-red-600">
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
                        className={!error.title ? inputStyling.defaultStyling : inputStyling.errorStyling}
                        autoComplete="off"
                        placeholder=" " 
                        onChange={(e) => handleInput(e)}
                        />
                    <label htmlFor="title_playlist" className={!error.title ? labelStyling.defaultStyling : labelStyling.errorStyling}>Title</label>
                </div>
                <div className="relative z-0 mt-6">
                    <input 
                        type="text" 
                        id="blog_summary" 
                        className={!error.description ? inputStyling.defaultStyling : inputStyling.errorStyling}
                        placeholder=" " 
                        autoComplete="off"
                        onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="description_playlist" className={!error.description ? labelStyling.defaultStyling : labelStyling.errorStyling}>Description</label>
                </div>
                <>
                    {
                        (error.title || error.description) && showErrorMessage()
                    }
                </>
                <div className="flex justify-end mt-8 gap-6">
                    <button className="text-xs text-center text-white border border-none rounded-lg outline-none" onClick={onClose}>
                        Cancel
                    </button>
                    <button 
                        className="text-xs text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none px-3 py-2 border border-none outline-none rounded-lg"
                        onClick={handleNewBlogSubmit}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default AddNewBlogModal