import React, { useState, useEffect, useRef } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/Login'
import BlogService from './services/blogs'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  const blogFormRef = useRef()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      BlogService.setToken(user.token)
    }
  }, [])

  const addBlog = (newBlog) => {
    blogFormRef.current.toggleVisibility()
    BlogService.create(newBlog).then(setBlogs(blogs.concat(newBlog)))
  }

  const handleLogout = async (event) => {
    console.log('logout user', user)
    try {
      window.localStorage.removeItem('loggedBlogappUser')
      setUser(null)
      BlogService.setToken('null')
    } catch (exception) {
      console.log('exception', exception)
    }
  }

  return (
    <div>
      <h1>Blogs</h1>
      {user === null ? (
        <div>
          <Togglable buttonLabel='login'>
            <LoginForm setUser={setUser} />
          </Togglable>
        </div>
      ) : (
        <div>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>logout</button>
          <Togglable buttonLabel='add blog' ref={blogFormRef}>
            <BlogForm createBlog={addBlog} />
          </Togglable>
          <Blogs blogs={blogs} setBlogs={setBlogs} />
        </div>
      )}
    </div>
  )
}

export default App
