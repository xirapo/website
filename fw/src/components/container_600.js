//libs
import React from "react"

//styles
import css from "../styles/index.module.css"

export default ({ children }) => (

    <div className={css.container}>
        <ul>
        { children }
        </ul>
    </div>
)