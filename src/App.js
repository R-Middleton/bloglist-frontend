import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/Login'
import BlogService from './services/blogs'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      BlogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <h1>Blogs</h1>
      {user === null ? (
        <div>
          <LoginForm setUser={setUser} />
        </div>
      ) : (
        <div>
          <p>{user.name} logged in</p>
          <Blogs />
        </div>
      )}
    </div>
  )
}

export default App
