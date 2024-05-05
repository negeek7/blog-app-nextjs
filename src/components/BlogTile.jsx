import Link from 'next/link'
import React from 'react'

function BlogTile({blog}) {

    let textLength = 60

 const getBlogTileContent = (text) => {
    if(text.length > textLength){
        let truncVal = text.substring(0, 200)
        return truncVal + '...'
    }
 }

  return (
    <>
    <Link href={`/blog/${blog.id}`}>
        <div className="cursor-pointer shadow-[0px_0px_12px_0px_#44337a] rounded-xl hover:scale-105 transition-all ease-in-out duration-500">
            <div className='text-center p-6 rounded-tl-xl'>
                <h2 className='truncate'>{blog.title}</h2>
            </div>
            <div className="p-4 rounded-br-xl">
                <p className="text-gray-300">{getBlogTileContent(blog.content)}</p>
            </div>
            
        </div>
    </Link>
    </>
  )
}

// truncate text 


export default BlogTile