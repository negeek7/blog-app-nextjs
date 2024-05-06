import { createNewBlogApiCaller, deleteBlogPostApiCaller, updateBlogPostApiCaller } from '@/apiCaller/blogApiCaller'
import { X } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'

function DeleteBlogModal({ onClose, blog }) {

    const handleBlogDelete = () => {
        deleteBlogPostApiCaller('/api/blogs', blog)
        .then(() => onClose())
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 border-lime-400">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-slate-900 p-4 rounded-lg z-10 border-lime-400 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] w-72">
                <div className="flex justify-between">
                    <div className='flex-1 text-center'>Delete Blog!</div>
                    <span className="cursor-pointer" onClick={onClose}>
                        <X size={22} />
                    </span>
                </div>
                <div className="mt-6">
                    <div className="flex justify-center gap-6">
                        <button className="text-md text-center text-white border border-none rounded-lg outline-none" onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            className="text-md text-center text-white bg-red-800 hover:bg-red-900 focus:outline-none p-2 px-4 border border-none outline-none rounded-lg"
                            onClick={handleBlogDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBlogModal