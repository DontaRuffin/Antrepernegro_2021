import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo2 from "../components/Logo2"
import CEO2 from "../components/CEO2"

const ThirdPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Professional Background and Services</h1>
    <p>Gerald is an accomplished Sales Trainer for an industry leading enterprise software company. He works with sales professionals around the globe by helping them develop critical skills needed to be successful in a fast paced, and competitive sales environment. Some of his key areas of expertise are sales training and development, management consulting, inside sales, lead generation, product training, and social selling.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Logo2 />
    </div>
    <p>If you would like assistance developing your own business(es), Gerald is available to work with any professional actively looking for assistance in the following areas: <b>Sales Training and Development; Management Consulting, Inside Sales, Lead Generation; Product Training;</b> and <b>Social Selling.</b> </p>
    <p>Please email < a href="mailto:antrepernegro@gmail.com">antrepernegro@gmail.com</a> for more information.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <CEO2 />
    </div>
    
    <nav>
    <Link to="/">HOME</Link> <br />
    <Link to="/page-2/">ABOUT</Link> <br />
    <Link to="/page-3/">SERVICES</Link> <br />
    <Link to="/page-4/">SUPPORT</Link> <br />
    </nav><br />
  </Layout>
)

export default ThirdPage