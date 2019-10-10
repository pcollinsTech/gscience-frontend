import React from "react"

const BlogBanner = ({ featured_image, title }) => (
  <section id="blog_banner" className="blog_major">
    <div style={{ backgroundImage: featured_image }}>
      <div className="inner">
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        </header>
      </div>
    </div>
  </section>
)

export default BlogBanner
