import React from 'react'
import Link from 'next/link'
import { PencilSimple, Trash } from '@phosphor-icons/react/dist/ssr'

function BlogTile({ blog, blogActionHandler }) {

    let textLength = 60

 const getBlogTileContent = (text) => {
    if(text.length > textLength){
        let truncVal = text.substring(0, 200)
        return truncVal + '...'
    } else {
        return text
    }
 }

    const handleBlogActions = (e, blog, action) => {
        e.preventDefault()
        blogActionHandler(blog, action)
    }

  return (
    <>
    <Link href={`/blog/${blog.id}`}>
        <div className="relative block group cursor-pointer min-h-64 shadow-[0px_0px_12px_0px_#44337a] rounded-xl hover:scale-105 transition-all ease-in-out duration-500">
            <div className='text-center p-6 rounded-t-xl bg-purple-950'>

                <h2 className='truncate'>{blog.title}</h2>
            </div>
            <div className="p-4 rounded-br-xl">
                <p className="text-gray-300">{getBlogTileContent(blog.content)}</p>
            </div>

            {
                blog.editable &&
            <div className="absolute -right-2 bottom-6 flex flex-col gap-4 z-10">
                <button onClick={(e) => handleBlogActions(e, blog, 'edit')} className="z-10">
                    <PencilSimple 
                        size={20} 
                        className="bg-slate-400 rounded-lg p-1 hover:scale-125 transition-all ease-in duration-200"
                    />
                </button>
                <button onClick={(e) => handleBlogActions(e, blog, 'delete')} className="z-10">
                    <Trash size={20} className="bg-red-700 rounded-lg p-1 hover:scale-125 transition-all ease-in duration-200"/>
                </button>
            </div>

            }
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-md text-violet-300 text-center my-2">Read More</div>
        </div>
    </Link>
    </>
  )
}

// truncate text 


export default BlogTile