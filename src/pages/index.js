import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../components/Logo"


const IndexPage = () => (
  <Layout>
    <Logo />
    <SEO title="Home" />
    <h1>Welcome to Antrepernegro (est. 1865)</h1>
    <p>At some point you have to ask yourself, what are dreams if you can’t turn them into reality? Dr. Martin Luther King, Jr. had a dream. Antrepernegro (est. 1865) is the reality. </p>
    <p><em>“In the process of creating music, attention shifted toward trying to create curiosity. One of the last songs on the project is called “Antrepernegro” and the idea grew from this. In short, I created a dope song, gave it a title, and now I am building a business around my creation.”</em></p>
    <p><center> - Gerald A. Alston (Founder/CEO) </center></p>
    <p>Antrepernegro (est. 1865) was created to provide business training and consulting for aspiring entrepreneurs with a vision to effectively decrease the wealth gap for Blacks in America, and a mission to strengthen economic development by building relationships within the Black community.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Logo />
    </div>
    <nav>
    <Link to="/">HOME</Link> <br />
    <Link to="/page-2/">ABOUT</Link> <br />
    <Link to="/page-3/">SERVICES</Link> <br />
    <Link to="/page-4/">SUPPORT</Link> <br />
    </nav><br />
  </Layout>
)

export default IndexPage
