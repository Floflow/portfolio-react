import React from "react";
import { useParams } from "react-router-dom";


const Project = ({ data }) => {
  const { projectname } = useParams();
  console.log(typeof(projectname))
  console.log(data)
  //console.log(match.params.projectname)
  const project = data.find(p => p.name === projectname);
  let projectData;

  if (project) {
    projectData = (
      <div>
        <h3> {project.name} </h3>
        <p>{project.description}</p>
      </div>
    );
  } else {
    projectData = <h2> Sorry. Product doesn't exist </h2>;
  }

  return (
    <div>
      <div>{projectData}</div>
    </div>
  );
};

export default Project;

