import React from "react";
import ProjectDescription from './ProjectDescription';

function Project(props) {
  return (
    <div>
      <h1>Project</h1>
      <ProjectDescription
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
        test="Desriptopn de l'applicaon"
      />
    </div>
  )
}

export default Project;
