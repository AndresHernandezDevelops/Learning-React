import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project)
        return(
          <ProjectItem key={project.title} project={project} />
        )
      });
    }
    console.log(this.props.projects);
    return (
      <div className="Projects">
        my projects
        <br/>
        {this.props.test}
        <br/>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
