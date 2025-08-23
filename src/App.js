import React, { useEffect } from "react";
import MyProfile from './components/myprofile';
import ProfilePic from "./sidebar/ProfilePic";
import Icons from "./sidebar/socialicons";
import About from "./components/about"; 
import MySkills from "./components/skills";
import MyEducations from "./components/education";
import MyProjects from "./components/projects";
import Mycontact from "./components/contact";
import Footer from "./components/footer";
import './styles/App.css';
import './styles/index.css';
import './styles/resumeintro.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/education.css';
import './styles/projects.css';
import './styles/contacts.css';
import './styles/footer.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-fade]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div>
      <section className="resumeintro" data-fade>
        <ProfilePic />
        <MyProfile />
        <Icons />
      </section>

      <section className="about-sec" data-fade>
        <About />
      </section>

      <section className="skills-sec" data-fade>
        <MySkills />
      </section>

      <section className="edu-sec" data-fade>
        <MyEducations />
      </section>

      <section className="project-sec" data-fade>
        <MyProjects />
      </section>

      <section className="contact-sec" data-fade>
        <Mycontact />
      </section>

      <section className="footer-sec" data-fade>
        <Footer />
      </section>
    </div>
  );
}

export default App;