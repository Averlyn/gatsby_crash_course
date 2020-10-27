import React from 'react'
import { Link } from "gatsby"


import Layout from "../components/layout"

const BlogPage = ({data}) => (
        <div>
            <Layout>
            <h1>Hi people</h1>
            <p>Welcome to About us.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas deserunt magnam iusto possimus inventore ipsam labore reiciendis fuga distinctio, dolores provident autem officiis sequi necessitatibus molestiae. Perspiciatis autem eum recusandae amet illum? Dolorem necessitatibus earum sapiente, nemo magni deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi ut perferendis saepe reprehenderit distinctio dolore modi facere, maxime unde iusto ullam quas commodi ex obcaecati iste dignissimos officiis numquam? Delectus corporis et rem sunt aspernatur eius nulla, accusantium, atque magni aliquam maxime similique animi? Consequatur sunt aut fugit ducimus ullam quaerat doloribus. Possimus iusto ratione quaerat quisquam laboriosam natus doloribus hic harum nulla ullam repellat itaque id accusamus officia, labore libero cum, magni omnis asperiores illum odio ipsam voluptas! Rerum quo assumenda mollitia deserunt rem eaque similique, numquam incidunt ullam hic, omnis aut quaerat illo laudantium nihil reiciendis saepe.</p>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>{post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br/>
                    <br/>
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br/>
                    <br/>
                    <hr/>
                </div>
            ))}
            
            </Layout>
            
        </div>
    )


    export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                    path
                    title
                    author
                    date
                    }
                }
            }
        }
    }
`

export default BlogPage;
