import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ post }) => {
  const {
    title,
    featured_media: { source_url },
    slug,
    excerpt,
    date,
  } = post.node
  console.log("EXCERPT", excerpt)
  return (
    <div className="col-sm-4 blog_summary_item d-flex justify-content-between flex-column">
      <Link to={slug}>
        <img src={source_url} alt="" />
        <h4
          dangerouslySetInnerHTML={{ __html: title }}
          className="my-2"
          style={{ color: "black" }}
        />
        <span>{date}</span>
        <p
          dangerouslySetInnerHTML={{
            __html: excerpt.replace("[&hellip;]", "&hellip;"),
          }}
        />
        <div className="mb-5 text-center">
          <button className="btn btn-primary">Read More</button>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
