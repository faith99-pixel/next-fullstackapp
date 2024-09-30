import Link from 'next/link'
import React from 'react'

const Blog_List = () => {
  return (
    // Dynamic routing
    <div>
      <h1>List of Blogs</h1>
      <Link href="">Blog_1</Link>
      <br/>
      <Link href="">Blog_2</Link>
    </div>
  )
}

export default Blog_List
