//libs
import React from "react"
import { Link } from "gatsby"

//style
import css from "../styles/index.module.css"

export default props => (
    <Link to="#" >
        <aside className={css.ra_date}>
            {props.date}
        </aside>
    </Link>
)