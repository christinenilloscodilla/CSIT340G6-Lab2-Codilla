import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Contact"
        subtitle="Say hi."
      />

      <ul className="mt-8 space-y-3">

        <ContactLink
          label="Email"
          href="mailto:christine.codilla@cit.edu"
          text="christine.codilla@cit.edu"
        />

        <ContactLink
          label="GitHub"
          href="https://github.com/christinenilloscodilla"
          text="github.com/christinenilloscodilla"
        />

        <ContactLink
          label="Facebook"
          href="https://www.facebook.com/christine.codd.Sn"
          text="Christine N. Codilla"
        />

      </ul>
    </section>
  )
}

export default ContactSection