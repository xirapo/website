//libs
import React, { Children } from "react"

//styles
//import css from "../styles/index.module.css"

//components
import Container from "../components/container_600"
import RAFeed from "../components/ra_box"
import RATitle from "../components/ra_title"
import RADate from "../components/ra_date"

export default props => (

<Container>
    <RAFeed>
    <RATitle title={"this is the new tittle"}/>
    <RADate date={"03/14/2020"}/>
    </RAFeed>
    <RAFeed>
    <RATitle title={"this is the new tittle"}/>
    <RADate date={"03/14/2020"}/>
    </RAFeed>
    <RAFeed>
    <RATitle title={"this is the new tittle"}/>
    <RADate date={"03/14/2020"}/>
    </RAFeed>
    <RAFeed>
    <RATitle title={"this is the new tittle"}/>
    <RADate date={"03/14/2020"}/>
    </RAFeed>
</Container>

)