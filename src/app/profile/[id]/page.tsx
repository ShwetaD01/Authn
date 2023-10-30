import React from 'react'

const page = ({params}: any) => {
  return (
    <div className='flex justify-center items-center min-h-screen m-5'>
      <h1>
        Weclome   <span>{params.id}</span>
      </h1>

    </div>
  )
}

export default page
