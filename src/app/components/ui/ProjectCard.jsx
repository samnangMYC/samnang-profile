import React from 'react'

const ProjectCard = ({imageUrl,title,description}) => {
  return (
    <div>
        <div className="h-52 w-28 "
        style={{background: `url(${imageUrl})`,backgroundSize: "cover"}}
        ></div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard