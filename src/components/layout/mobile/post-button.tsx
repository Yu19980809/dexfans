'use client'

import { GiFeather } from 'react-icons/gi'

const PostButton = () => {
  return (
    <div
      onClick={() => console.log('mobile post')}
      className="fixed right-6 bottom-20 md:hidden block p-4 rounded-full bg-sky-500 z-20"
    >
      <GiFeather size={20} color="white" />
    </div>
  )
}

export default PostButton
