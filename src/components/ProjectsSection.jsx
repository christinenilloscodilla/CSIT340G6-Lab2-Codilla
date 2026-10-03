import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Things I have built."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">

        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/christinenilloscodilla/CSIT340G6-Lab3-Codilla"
        />

        <ProjectCard
          year="2026"
          title="Portfolio in Components"
          description="A portfolio website created using React components and Tailwind CSS."
          tech="React · Tailwind CSS"
          link="https://github.com/christinenilloscodilla"
        />

        <ProjectCard
          year="2026"
          title="React Learning Activities"
          description="Practice projects and exercises created while learning React and JavaScript."
          tech="React · JavaScript"
          link="https://github.com/christinenilloscodilla"
        />

        <ProjectCard
          year="2026"
          title="Web Development Practice"
          description="Academic exercises focused on developing web pages and programming skills."
          tech="HTML · CSS · JavaScript"
          link="https://github.com/christinenilloscodilla"
        />

      </div>
    </section>
  )
}

export default ProjectsSection