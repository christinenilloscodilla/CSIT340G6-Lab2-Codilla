import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and developed my skills."
      />

      <ol className="mt-8 space-y-8 border-l border-stone-200">

        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Studying programming, web development, databases, systems analysis, and other areas of information technology."
        />

        <TimelineItem
          period="2026"
          title="React and Web Development"
          place="CSIT340"
          description="Learning React, JavaScript, component-based development, Tailwind CSS, and GitHub."
        />

        <TimelineItem
        period="2026"
        title="Academic Projects"
        place="Cebu Institute of Technology – University"
        description="Developing academic projects and completing hands-on activities related to programming and information technology."
        />

      </ol>
    </section>
  )
}

export default ExperienceSection