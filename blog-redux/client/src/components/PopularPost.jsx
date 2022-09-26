import React from 'react'

export const PopularPost = ({post}) => {
  return (
    <div className='bg-gray-400 my-1'>
        <div className='flex text-xs p-2 text-white hover:bg-gray-800'>
            {post.title}
        </div>
    </div>
  )
}
