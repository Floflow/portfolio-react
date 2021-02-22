import React from "react";
import Project from './Project';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";


const Projects = ({match}) => {
  const projectData = [
    {
      id: 1,
      name: "Twitter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "airBnb",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "Photoshop",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
  ];
  const { url, path } = useRouteMatch();
  console.log(useRouteMatch())

  /* Create an array of `<li>` items for each product */
  const linkList = projectData.map((project) => {
    return (
      <li key={project.id}>
        <Link to={`${url}/${project.name}`}>{project.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3>Projects</h3>
          <ul>{linkList}</ul>
        </div>
      </div>
      <Route exact path={`${url}/:projectname`}>
        <Project data={projectData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a product.</p>
      </Route>
    </div>
  );
};

export default Projects;
