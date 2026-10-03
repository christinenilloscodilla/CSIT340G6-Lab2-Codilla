import SectionHeading from './SectionHeading'
import Fact from './Fact'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="About"
        subtitle="A little about who I am."
      />

      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I am a third year Information Technology student at Cebu Institute
        of Technology – University. I enjoy gaming, anime, music, and learning
        about technology. I am currently developing my skills in programming
        and web development.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact
          label="Course"
          value="BS Information Technology"
        />

        <Fact
          label="Year level"
          value="Third year"
        />

        <Fact
          label="School"
          value="CIT-U"
        />

        <Fact
          label="Based in"
          value="Cebu"
        />
      </dl>
    </section>
  )
}

export default AboutSection