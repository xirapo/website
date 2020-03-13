//libs
import React from "react"
import {Link} from "gatsby"

// style
import css from "../styles/index.module.css"

export default () => (
    <div className={css.nav}>
        <Link to="/blog/">Blog</Link>
        <Link to="/projects/">Projects</Link>
        <a href="https://twitter.com/invercase">Twitter</a>
        <a href="https://www.instagram.com/frankgarcia29/?hl=es-la/">Instagram</a>

    </div>
)