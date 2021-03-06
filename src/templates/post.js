import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  featured_image,
}) => {
  return (
    <React.Fragment>
      <section id="blog_banner" className="blog_major">
        <img src={featured_image} alt={title} style={{ width: "100%" }} />
        <div className="inner">
          <header>
            <h1 className="" dangerouslySetInnerHTML={{ __html: title }} />
          </header>
        </div>
      </section>
      <section className="section">
        <div className="container ">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="blog_content"
              />
              <div style={{ marginTop: `4rem` }}>
                <p>
                  {date}
                  {/* <Link to={`/author/${author.slug}`}>{author.name}</Link> */}
                </p>
                {/* {categories && categories.length ? (
                <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category.slug}cat`}>
                        <Link to={`/categories/${category.slug}/`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag.slug}tag`}>
                        <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        featured_image={post.featured_media.source_url}
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      featured_media {
        source_url
      }
      tags {
        name
        slug
      }
    }
  }
`
