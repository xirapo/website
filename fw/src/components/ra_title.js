//libs
import React from "react"
import { Link } from "gatsby"

//style
import css from "../styles/index.module.css"

export default props => (
    <Link to="/blog_post" className={css.ra_title}>
        {props.title}
    </Link>
)