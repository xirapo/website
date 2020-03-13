//libes
import React from "react"

// components
import Nav from '../components/nav';
import SubHeader from "../components/subheader"
import Avatar from "../components/profile_image"

//styles
import css from "../styles/index.module.css"


export default () => (
    <div>
    <Nav/>
    <div className={css.wrapper}>
    <div className={css.header}>

        <Avatar/>
        <h1 className={css.name}>
            Francisco Garcia
        </h1>
        <SubHeader/>
    </div>
    </div>
    </div>
    
)