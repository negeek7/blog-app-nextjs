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
        <div className="border-2 border-pink-400 cursor-pointer max-h-80">
    <Link href={`/blog/${blog.id}`}>
            <h3 className='m-0 text-center p-8 bg-slate-500 truncate'>{blog.title}</h3>
            <p>{getBlogTileContent(blog.content)}</p>
    </Link>
        </div>
    </>
  )
}

// truncate text 


export default BlogTile