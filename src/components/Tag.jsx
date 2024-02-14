import React from 'react'

export default function Tag(props) {
  return (
    <article className='px-2 py-[3px] rounded-md bg-gray-300 cursor-pointer text-sm'>{props.tag}</article>
  )
}
