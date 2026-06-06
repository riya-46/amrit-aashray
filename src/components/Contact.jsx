function Contact() {
  return (
    <section className="section contact-section bg-[#fffaf5]" id="contact">
      <div className="contact-content mx-auto max-w-7xl px-5 lg:px-8">
        <div className="contact-primary-row">
          <div className="contact-intro max-w-xl">
            <p className="section-kicker">CONTACT</p>
            <h2 className="section-title contact-title">Let's Connect.</h2>
            <p className="contact-subtitle">
              Volunteer, collaborate, support, or simply reach out.
            </p>
          </div>

          <div className="contact-link-item contact-location">
            <span className="contact-brand-icon contact-brand-icon-location" aria-hidden="true">
              <LocationPinIcon />
            </span>
            <div>
              <span className="contact-link-label">Location</span>
              <strong className="contact-location-text">
                <span>Gorakhpur</span>
                <span className="contact-location-nowrap">Uttar Pradesh</span>
                <span>India</span>
              </strong>
            </div>
          </div>

          <div className="contact-social-links" aria-label="Social contact links">
            <a
              className="contact-link-item contact-social-item"
              href="https://chat.whatsapp.com/EDb0mHbKSMs1Yo8rdpCQsE"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Join Amrit Aashray WhatsApp group"
            >
              <span className="contact-brand-icon" aria-hidden="true">
                <img src="/gallery/whatsapplogo.jpg" alt="" />
              </span>
              <div>
                <span className="contact-link-label">WhatsApp</span>
                <strong>Join Group</strong>
              </div>
            </a>

            <a
              className="contact-link-item contact-social-item"
              href="https://www.instagram.com/amritaashray/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Open Amrit Aashray Instagram profile"
            >
              <span className="contact-brand-icon" aria-hidden="true">
                <img src="/gallery/instalogo.jpg" alt="" />
              </span>
              <div>
                <span className="contact-link-label">Instagram</span>
                <strong>DM and follow</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationPinIcon() {
  return (
    <svg aria-hidden="true" height="64" viewBox="0 0 64 74" width="56">
      <path
        d="M32 4C19.12 4 8.68 14.26 8.68 26.9c0 15.82 18.9 36.46 22.28 40.03a1.43 1.43 0 0 0 2.08 0c3.38-3.57 22.28-24.21 22.28-40.03C55.32 14.26 44.88 4 32 4Z"
        fill="#f20d0d"
      />
      <circle cx="32" cy="27" fill="#fffaf5" r="10.8" />
      <ellipse
        cx="32"
        cy="67"
        fill="none"
        rx="25"
        ry="5.2"
        stroke="#f20d0d"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export default Contact;
