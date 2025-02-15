import React from 'react';

const Resume = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Resume</h2>
            <p className="text-gray-700">Download my latest resume:</p>
            <div className="flex space-x-4 mt-4">
                <a href="/resume/academic_resume.pdf" className="px-4 py-2 bg-gray-900 text-white rounded">Academic Resume</a>
                <a href="/resume/professional_resume.pdf" className="px-4 py-2 bg-gray-900 text-white rounded">Professional Resume</a>
            </div>
        </div>
    );
};

export default Resume;
