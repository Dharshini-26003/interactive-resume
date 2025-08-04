import React from 'react';

function MyEducations(){
    return(
        <section id='education'>
            <h2>Education</h2>
            <article className='edu-list'>
                <h3>College/University</h3>
                <p>
                  <strong>Degree: </strong>
                  <span>Bachelor of Arts in English Literature</span> 
                </p>
                <p>
                    <strong>Institution: </strong>
                    <span>Periyar University, Salem</span> 
                </p>
                <p>
                    <strong>Year:</strong> 
                    <span>2021-2025</span> 
                </p>
            </article>
            <article className='edu-inst'>
                <h3>Course</h3>
                <p>
                    <strong>Program: </strong>
                    <span>Full Stack Web Development</span> 
                </p>
                <p>
                    <strong>Institute:</strong>
                    <span>Besant Technologies, Chennai</span> 
                </p>
                <p>
                    <strong>Certificate ID:</strong>
                    <span>125185</span> 
                </p>
            </article>            
        </section>
    )
}
export default MyEducations;