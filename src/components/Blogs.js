import Blog from './Blog'
import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'

const Blogs = ({ blogs, setBlogs }) => {
  const isCancelled = React.useRef(false)

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      if (!isCancelled.current) {
        setBlogs(blogs)
      }
    })
    return () => {
      isCancelled.current = true
    }
  }, [])

  return (
    <div>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default Blogs
