import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tshirt from "../components/Tshirt"
import Tshirt2 from "../components/Tshirt2"
import Logo from "../components/Logo"

const FourthPage = () => (
  <Layout>
    <SEO title="Support" />
    
    <h1>Support</h1>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
    <Tshirt2 />
    </div>
    <p>#HighFlyer #TheMostHigh #HFTMH <br /> Available everywhere.
</p>
<iframe width="100%" height="150" src="https://embed.song.link/?url=https%3A%2F%2Falbum.link%2Fi%2F1529191105&theme=dark" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"></iframe>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
    <Tshirt />
    </div>
    <p>
You can support Antrepernegro (est. 1865) by purchasing one of our shirts. Please email < a href="mailto:antrepernegro@gmail.com">antrepernegro@gmail.com</a> to order your own. We appreciate the support!</p>
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

export default FourthPage