import React from 'react';

function MyProjects() {
    return (
        <section>
            <h2>Projects</h2>
            <article className='project-list'>
                <h3>Interactive Resume</h3>
                <p>
                    <strong>Description: </strong>
                    <span>
                        <li>A fully responsive personal website to showcase portfolio and resume</li>
                        <li>Includes smooth navigation, form validation, and dynamic sections</li>              
                    </span>
                </p>
                <p>
                    <strong>Technologies Used: </strong>
                    <span>HTML5, CSS3, JavaScript, React.js</span>
                </p>
                <p>
                    <strong>Year: </strong> 
                    <span>2025</span>
                </p>
            </article>
            <article className='project-list'>
                <h3>Expense Tracker</h3>
                <p>
                    <strong>Description: </strong>
                    <span>
                        <li>Built a dynamic application for adding, removing and vewing expense records</li>
                        <li>Utilized React functional components and real-time updates</li>
                    </span>
                </p>
                <p>
                    <strong>Technologies Used: </strong>
                    <span>CSS3, JavaScript, React.js</span>
                </p>
                <p>
                    <strong>Year:</strong> 
                    <span>2025</span>
                </p>
            </article>
        </section>
    );
}
export default MyProjects;