import React from 'react'

const page = ({params}: {params:{slug:string}}) => {
  return (
    <div>
      <p>Do the shopping {params.slug [4]}</p>
    </div>
  )
}

export default page
