//libs
import React from "react"
import { Link } from "gatsby"

// styles
import css from "../styles/blog.module.css"

// components
import Navbar from "../components/nav"
import ProfileIMG from "../components/profile_image"

export default () => {

    return (
        <div>
            <Navbar/>
            <main className={css.main} >
                <div className={css.wrapper}>
                    <header className={css.header}>
                        <div className={css.mini_header}>
                            <Link to={/blog/}>More Blogs</Link>
                            <p>img: author's name</p>
                        </div>
                        <div className={css.title}>
                            <h1>
                                What did i learn about The World is Flat By Thomas Friedman
                            </h1>
                        </div>
                        <div className={css.author}>
                            <div className={css.author_container}>
                                <img className={css.profile_img} src="https://scontent.fmga3-1.fna.fbcdn.net/v/t1.0-9/62245492_10214728718559602_9015464640129269760_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=p9W48sGZAmoAX9hphxt&_nc_ht=scontent.fmga3-1.fna&oh=a9b265003ca4c32ab4b8c216927763bc&oe=5E931424"></img>
                            </div>
                            <p>
                                    By <strong>Francisco Garcia</strong>
                                    <br/>
                                    March 21, 2020
                                </p>
                        </div>
                        <div className={css.cover_image}>
                            <div className={css.cover_wrapper}>
                                <div style={{width:"100%"} ,{paddingbottom:"100%"}}></div>

                                <picture>
                                <source type={"image/webp"} media={"(max-width: 445px) 100vw, 445px"}
                                        srcset={"../media/profile_media.jpg"}
                                        sizes={"(max-width: 445px)"}/>
                                <img media={"(max-width: 445px) 100vw 445px"}   class="example" src={"../media/profile_media.jpg"} srcSet={"../media/profile_media.jpg"} alt="This cat is all business"/>
                                </picture>
                            </div>
                        </div>
                    </header>

                </div>

            </main>    
        </div>
    )
}