import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


function Icons(){
    return(
        <div className="icon-container">
            <a href="https://github.com/joshuahclark999" target="_blank" rel="noreferrer">
            <GitHubIcon />
            </a>
            <a href="https://twitter.com/joshuahclark" target="_blank" rel="noreferrer">
            <TwitterIcon />
            </a>
        </div>
    )
}

export default Icons;