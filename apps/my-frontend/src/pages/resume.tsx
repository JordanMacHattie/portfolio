import React, { useState } from "react";
import managerResume from '../data/resume.manager.json'
import engineerResume from '../data/resume.engineer.json'
import { Role } from '../types/Roles'

const Resume = () => {
    const [role, setRole] = useState<Role>(Role.Engineer);

    const toggleRole = () => {
        setRole(role === Role.Manager ? Role.Engineer : Role.Manager );
    };

    const resumeData = role === Role.Manager ? managerResume : engineerResume;

  return (
    <div>
      <button onClick={toggleRole}>
          {role} toggle
      </button>

      <div>
        <h1>
          {resumeData.name}
        </h1>
        <ul>
          <li>{resumeData.location}</li>
          <li>{resumeData.contact.LinkedIn}</li>
          <li>{resumeData.contact.GitHub}</li>
        </ul>
      </div>

      <p>{resumeData.profile}</p>
      <ul>
        {resumeData.professional_experience.map((job:Array, index:number) => (
          <li key={index}>
            <p>{job.title}</p>
            <p>{job.company}</p>
            <p>{job.dates}</p>
            <p>{job.summary}</p>
            <p>{job.key_achievements}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Resume;