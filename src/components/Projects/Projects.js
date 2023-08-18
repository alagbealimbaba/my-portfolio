import React from "react";
import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";
import ProjectOne from "../../assets/images/Projects/ProjectOne.png";
import ProjectTwo from "../../assets/images/Projects/ProjectTwo.png";
import ProjectThree from "../../assets/images/Projects/ProjectThree.png";
import ProjectFour from "../../assets/images/Projects/ProjectFour.png";
import ProjectFive from "../../assets/images/Projects/ProjectFive.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Login Page for ZX3 Crypto Bank"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={ProjectOne}
          githubLink="https://github.com/alagbealimbaba/Landing-Page"
          deployedLink="https://zx3-login-form.netlify.app/"
        />
        <ProjectCard
          title="ZEN Gaming Community"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={ProjectTwo}
          githubLink="https://github.com/alagbealimbaba/zen-community"
          deployedLink="https://zengamecom.netlify.app/"
        />

        <ProjectCard
          title="COMMUNITY CREATOR"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={ProjectThree}
          githubLink="https://github.com/your-username/your-repo"
          deployedLink="https://your-deployed-site-url.com"
        />
        <ProjectCard
          title="Portfolio Built with react with tailwind CSS"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={ProjectFour}
          githubLink="https://github.com/alagbealimbaba/my-portfolio"
          deployedLink="https://your-deployed-site-url.com"
        />
        <ProjectCard
          title="Random Advice App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={ProjectFive}
          githubLink="https://github.com/alagbealimbaba/Advice-App"
          deployedLink="https://advice-app1221.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
