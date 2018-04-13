import React from "react"

import { Link } from 'react-router-dom'

import "./node.css"
import H1 from "../heading/H1"
import H2 from "../heading/H2"
import Text from "../text/text"
/**
 * Created by Deegha on 05/12/2018
 */

import Card from "../card/card"
import FelxRow from "../flexRow/felxRow"
import JobExtras from "../jobExtras/jobExtras"

const Node = ({job, like, nodeKey, activeJob}) => 
    <Card className="wrapper">
        <FelxRow>
            <div className="companyLogo">
                <a href={job.company_url} target="new">
                    <img alt="log" src={job.company_logo} />
                </a>
            </div>
            <div className="jobDetails">
                <H1>{job.title}</H1>
                <H2>{job.company}</H2>
                <Text>{job.description.substring(0,500).replace(/<\/?[^>]+(>|$)/g, "")} ...</Text>
                <Link to={"jobPage/"+job.id} >Read more...</Link>
                <hr className="lineBreaker"/>
                <JobExtras job={job} />
            </div>
       </FelxRow>
    </Card> 

export default Node