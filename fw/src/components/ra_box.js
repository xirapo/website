//libs
import React from "react"

//styles
import css from "../styles/index.module.css"


export default ({ children }) => (
       <li className={css.ra_separator}>
        { children }
       </li>
    
)