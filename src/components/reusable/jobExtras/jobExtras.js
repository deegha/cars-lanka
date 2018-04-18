import React from "react"

import Icon from "../icon/icon"

import "./jobExtras.css"

const JobExtras = ({job}) => <div className="jobDetailsExtrasContainer">
    <span className="jobDetailExtras">
    <Icon name="building" />
    {job.type}</span>   
    <span className="jobDetailExtras">
        <Icon name="map-marker" />{job.location}
    </span>
    <span className="jobDetailExtras"><a href={job.company_url} target="new">
        <Icon name="desktop" />View Company</a>
    </span>
    <span className="jobDetailExtras">
        <Icon name="calendar" />{job.created_at}
    </span>
</div>

export default JobExtras