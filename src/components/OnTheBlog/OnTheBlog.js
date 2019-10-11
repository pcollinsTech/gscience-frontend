import React from "react"

// import FeaturedBlog from "./FeaturedBlog"
import BlogCard from "../BlogCard"

const OnTheBlog = ({ posts }) => {
  return (
    <div id="on_the_blog" className="">
      <h2 className="text-center mb-5">Recent Posts</h2>
      <div className="row">
        <div className="container blog__container">
          {posts.map(post => {
            return <BlogCard post={post} />
          })}
        </div>
      </div>
    </div>
  )
}

export default OnTheBlog
