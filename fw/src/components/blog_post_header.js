//libs
import React from "react"

// styles 
import css from "../styles/blog.module.css"

// components
import BPContainer from "../components/blog_post_header_container"
import Avatar from "../components/profile_image"
import BPDate from "../components/blog_post_date"
import BPTitle from "../components/blog_post_title"
import BPImage from "../components/blog_post_main_image"

export default () => {

    return (
        <div>
        <BPContainer>
        <Avatar/>
        <BPDate/>
        <BPTitle/>
        </BPContainer>
        <BPImage/>
        </div>
       
    )
}