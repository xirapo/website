//libs
import React from "react"

// styles 
import css from "../styles/blog.module.css"

export default ({ children }) => (
    <div className={css.header}>
        { children }
    </div>
)