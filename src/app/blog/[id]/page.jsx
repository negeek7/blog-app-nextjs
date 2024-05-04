'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function BlogPage() {

  const path = usePathname()

  console.log(path.split('/')[2], "ROUTERRR")
  const blogid = path.split('/')[2]

  useEffect(() => {
    fetch(`/api/blog/${blogid}`)
  }, [])

  return (
    <div>This is a single Blog Page</div>
  )
}

export default BlogPage