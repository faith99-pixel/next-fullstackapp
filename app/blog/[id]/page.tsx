import React from 'react'

const Blog_Page = ({params}:{params: {slug:number}}) => {
  return (
    <div>
      <p>Details of blog {params.slug}</p>
    </div>
  )
}

export default Blog_Page
