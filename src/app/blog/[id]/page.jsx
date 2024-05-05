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
      <div className='text-white p-8'>
        <div className="p-8 h-80 flex flex-col items-center justify-center gap-10 shadow-[0px_0px_82px_5px_#44337a] rounded-tr-xl
        rounded-bl-xl">
          <h1>{blog?.title}</h1>
          <span>{blog?.summary}</span>
        </div>
        <div className="mt-14">
          <p>{blog?.content}</p>
        </div>
      </div>
    }
    </>
  )
}

export default BlogPage