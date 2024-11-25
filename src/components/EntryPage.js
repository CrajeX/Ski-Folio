// src/components/EntryPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EntryPage = ({ setUserType }) => {
    const [selectedRole, setSelectedRole] = useState(null);

    const handleRoleSelection = (role) => {
        setUserType(role);
        setSelectedRole(role);
    };

    return (
        <div className="Home">
            <h1>Welcome to the Job Board</h1>
            {!selectedRole ? (
                <div className='Roles'>
                    <button onClick={() => handleRoleSelection('applicant')}>Applicant</button>
                    <button onClick={() => handleRoleSelection('employer')}>Employer</button>
                </div>
            ) : (
                <div className='Signinboard'>
                    <h3>Continue as {selectedRole}</h3>
                    <Link to="/signin"><button>Sign In</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                    <button onClick={() => setSelectedRole(null)} id='changerole'>Change Role</button>
                </div>
            )}
        </div>
    );
};

export default EntryPage;