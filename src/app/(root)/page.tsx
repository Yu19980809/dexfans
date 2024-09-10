'use client'

import { useState } from 'react'

import { user } from '@/declarations/user'
import { useAuth } from '@/components/providers/auth'
import { Button } from '@/components/ui/button'

const Home = () => {
  const { isAuth, login, logout } = useAuth()

  const [greeting, setGreeting] = useState<string>('')

  const onGreet = async () => {
    const res = await user.greet()
    setGreeting(res)
  }

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex gap-x-4">
        <Button onClick={onGreet}>Say Hi</Button>
        <p>{greeting}</p>
      </div>

      <div className="flex gap-x-4">
        {isAuth ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button onClick={login}>Login</Button>
        )}
      </div>
    </div>
  )
}

export default Home
