'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function BlogPage() {

  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(false)

  const path = usePathname()
  const blogid = path.split('/')[2]

  useEffect(() => {
    setLoading(true)
    fetch(`/api/blogs/${blogid}`)
    .then(res => res.json())
    .then(data => setBlog(data.blog[0]))
    setLoading(false)
  }, [])

  return (
    <>
    {
      loading ? <p>Loading....</p>
      :
      <div className='text-white'>
        <h2>{blog?.title}</h2>
        <span>{blog?.summary}</span>
        <p>{blog?.content}</p>
      </div>
    }
    </>
  )
}

export default BlogPage