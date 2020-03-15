//libs
import React from "react"

// styles 
import css from "../styles/blog.module.css"


export default () => {

    return (
        <div className={css.image_wrapper}>
            <div className={css.img_wrapper}>
            <div className={css.img_opt}>
            <div className={css.separator}></div>
            <img className={css.img} src="https://s3-us-west-2.amazonaws.com/tabs.web.media/b/8/b8cf/b8cf-square-1536.jpg"></img>
            </div>
            </div>
        </div>
    )
}