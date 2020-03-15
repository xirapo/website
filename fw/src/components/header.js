//libes
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// components
import Nav from '../components/nav';
import SubHeader from "../components/subheader"
import Avatar from "../components/profile_image"

//styles
import css from "../styles/index.module.css"


export default () => {

    // data pulling
const query = useStaticQuery(
    graphql`
    query {
        site{
            siteMetadata {
                name
            }
        }
    }`
)

return (
    <div>
    <Nav/>
    <div className={css.wrapper}>
    <div className={css.header}>

        <Avatar/>
        <h1 className={css.name}>
            { query.site.siteMetadata.name }
        </h1>
        <SubHeader/>
    </div>
    </div>
    </div>
) 
}