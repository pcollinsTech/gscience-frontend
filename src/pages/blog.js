import React from "react"
import SEO from "../components/seo"
import Layout from "../layout/Layout"
import Banner from "../components/Banner"
import BlogCard from "../components/BlogCard"

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="G-Science | Blog" />

        <Banner path={this.props.path} title="News." />

        <div id="main">
          <div id="on_the_blog">
            <h2 className="text-center mb-5">In The News</h2>

            <div className="row">
              <div className="container blog__container">
                {this.props.data.allWordpressPost.edges.map(post => {
                  return <BlogCard post={post} />
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          date(formatString: "DD / MMMM / YYYY")
          slug
          title
          wordpress_id
          excerpt
          featured_media {
            source_url
          }
        }
      }
    }
  }
`
