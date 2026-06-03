import { ArrowRight, HeartHandshake, MapPin, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section className="section contact-section bg-[#fffaf5]" id="contact">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[0.76fr_1.24fr] lg:gap-12 lg:px-8">
        <div className="contact-intro max-w-xl">
          <p className="section-kicker">CONTACT</p>
          <h2 className="section-title contact-title">Let's Connect.</h2>
          <p className="contact-subtitle">
            Volunteer, collaborate, support, or simply reach out.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href="https://www.instagram.com/amritaashray/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <InstagramIcon />
            </span>
            <span className="contact-card-label">Instagram</span>
            <strong>@amritaashray</strong>
            <small>Open Instagram profile</small>
          </a>

          <a
            className="contact-card"
            href="https://wa.me/919076627906"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <MessageCircle size={21} />
            </span>
            <span className="contact-card-label">WhatsApp</span>
            <strong>+91 90766 27906</strong>
            <small>Message Us</small>
          </a>

          <div className="contact-card">
            <span className="contact-card-icon" aria-hidden="true">
              <MapPin size={21} />
            </span>
            <span className="contact-card-label">Location</span>
            <strong>Gorakhpur</strong>
            <small>Uttar Pradesh, India</small>
          </div>

          <a
            className="contact-card contact-card-volunteer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdiM03QHQQ_pn8vVXe7LjDlUT36pzD3pSR_Ny-iz-puv9LKKQ/viewform"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Apply now to become a volunteer"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <HeartHandshake size={21} />
            </span>
            <span className="contact-card-label">Volunteer</span>
            <strong>Become a Volunteer</strong>
            <small>
              Support children's education, awareness campaigns, and community
              initiatives.
            </small>
            <span className="contact-card-button">
              Apply Now
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="21"
      viewBox="0 0 24 24"
      width="21"
    >
      <rect
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        width="16"
        x="4"
        y="4"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" fill="currentColor" r="1.2" />
    </svg>
  );
}

export default Contact;
