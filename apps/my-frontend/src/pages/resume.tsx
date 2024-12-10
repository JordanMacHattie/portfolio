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

        <p>
            {/* {resumeData} */}
        </p>
    </div>
  )
}

export default Resume;