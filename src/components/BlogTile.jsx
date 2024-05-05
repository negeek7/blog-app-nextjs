import Link from 'next/link'
import React from 'react'

function BlogTile({blog}) {
  return (
    <>
    <Link href={`/blog/${blog.id}`}>
        <div className="border-2 border-pink-400 p-2 cursor-pointer">
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <p>{blog.content}</p>
        </div>
    </Link>
    </>
  )
}

export default BlogTile