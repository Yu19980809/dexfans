'use client'

import { GiFeather } from 'react-icons/gi'

import { Hint } from '@/components/ui/hint'

const PostButton = () => {
  return (
    <div onClick={() => console.log('post')}>
      <div className="lg:hidden flex justify-center items-center p-4 rounded-full bg-sky-500 cursor-pointer transition hover:bg-opacity-80">
        <Hint side="bottom" label="Post">
          <GiFeather size={20} color="white" />
        </Hint>
      </div>

      <div className="hidden lg:block w-full py-2 rounded-full bg-sky-500 cursor-pointer transition hover:opacity-80">
        <p className="text-center text-[20px] text-white">
          Post
        </p>
      </div>
    </div>
  )
}

export default PostButton
