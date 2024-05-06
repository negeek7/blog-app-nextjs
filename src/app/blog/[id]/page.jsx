'use client'
import { ArrowFatLeft } from '@phosphor-icons/react/dist/ssr'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function BlogPage() {

  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(false)

  const path = usePathname()
  const blogid = path.split('/')[2]
  const router = useRouter()

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
      <div className='relative text-white p-8'>
        <div className=" relative p-8 h-80 flex flex-col items-center justify-center gap-10 shadow-[0px_0px_82px_5px_#44337a] rounded-tr-xl
        rounded-bl-xl">
          <ArrowFatLeft className="absolute left-2 top-2 sm:left-6 sm:top-6 cursor-pointer text-lg sm:text-4xl" onClick={() => router.back()}/>
          <h1>{blog?.title}</h1>
          <span>{blog?.summary}</span>
        </div>
        <div className="mt-14 leading-8">
          <p>{blog?.content}</p>
        </div>
      </div>
    }
    </>
  )
}

export default BlogPage