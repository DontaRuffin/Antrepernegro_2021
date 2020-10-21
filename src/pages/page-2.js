import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CEO from "../components/CEO"
import Logo from "../components/Logo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>CEO/Founder</h1>
    <h2>Gerald A. Alston</h2>
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem`}}>
    <CEO />
    </div>
    <p>Gerald Alston is no novice when it comes to diligence, dedication, and perseverance. Through his story, he truly understands the notion of “when life gives you lemons, make lemonade.” Gerald was raised by his hard working mother. His father, however, was a convicted felon and unable to fully be present. Neither of his parents attended college. In fact, no member on his father's side even completed high school aside from Gerald. To some it may seem that the odds were stacked against him. But to Gerald it was motivation to rewrite the narrative -- to choose a different path for his life. </p>
    <p>Upon graduating from high school, Gerald applied to three colleges in his home state, North Carolina. Gaining an acceptance into Winston-Salem State University (#WSSU), he proudly committed to the esteemed historically black college/university (HBCU) and set out to make the most of his education. Gerald double majored in Economics and Finance, graduated cum laude, and was also recognized as the Top Specialist Graduate for Economics in Fall 2009.</p>
    <p>At the start of his career, Gerald spent the bulk of his years dedicated to serving the youth in his community. He has 7+ years experience helping students who come from diverse backgrounds between the ages of 13 - 23. The majority of this experience was gained working with a nonprofit agency in Durham, NC that provides college access to high school students from disadvantaged backgrounds. In addition to helping with college access, Gerald served as a Student Life Instructor with one of the highest ranking high schools in NC. He also  helped provide career services for college students at a Hispanic-Serving Institution in Laredo, TX. </p>
    <p>In the midst of doing this work, Gerald’s life changed forever. In 2012, he met his wife - Kharmika. She was a Foreign Service Officer serving as a US Diplomat in the US Department of State from 2012-2017. To this day, Gerald continues to proclaim, “My decision to ask for her hand in marriage was the single best decision I am responsible for making.” </p>
    <p>Soon after merging their lives, Gerald and Kharmika moved to Amsterdam. While living in Amsterdam from 2015-2017, Gerald made the decision to break more barriers and continue his education. He was accepted into the University of Amsterdam Business School. He later graduated with a Master of Science in Business Administration, specializing in International Management. </p>
    <p>Applying all that he has learned in his studies, Gerald now assumes responsibility as a Sales Trainer for an industry leading enterprise software company. He assists sales professionals in different countries with developing critical skills needed to be successful in a fast paced and competitive sales environment. </p>
    <p>Reflecting over his life, Gerald was able to beat the odds. Though he grew up without an educational path laid before him, the importance of education and financial freedom was instilled in him. Gerald’s mother and father were able to watch their son grow up and experience more than either of them could dream. The Black experience in America is nuanced and has a generational impact. Antrepernegro (est. 1865) was created to help black folks turn their dreams into reality by focusing on economic, political, and social development.</p>
    <p>Gerald attributes much of his success and the creation of Antrepernegro (est. 1865) to not only his upbringing and work experience, but to his time spent as a Black student at Winston-Salem State University. In Gerald’s words, “Knowledge and Education are not the same but they are two of the most critical pillars that impact the black community’s economic, political, and social structure. I don’t know where I would be today if I didn’t get accepted into an HBCU. HBCUs give young black individuals opportunities that don’t otherwise exist. My goal is to partner with as many Historically Black Colleges and Universities (HBCUs) as possible throughout this journey. If you want to be an ally to the black community, please invest money, time, and resources into our HBCUs.”</p>
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

export default SecondPage
