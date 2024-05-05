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
        <div className="border-2 border-pink-400 p-2 cursor-pointer max-h-60 w-72">
            <h3>{blog.title}</h3>
            <p>{getBlogTileContent(blog.content)}</p>
        </div>
    </Link>
    </>
  )
}

// truncate text 


export default BlogTile