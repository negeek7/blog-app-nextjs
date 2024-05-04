import React from 'react'

function BlogTile({blog}) {
  return (
    <div className="border-2 border-pink-400">
        <h3>{blog.title}</h3>
        <p>{blog.summary}</p>
        <p>{blog.content}</p>
    </div>
  )
}

export default BlogTile