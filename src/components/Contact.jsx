import { Camera, ExternalLink, MapPin, MessagesSquare } from "lucide-react";

function Contact() {
  return (
    <section className="section bg-[#1f4d5c] text-white" id="contact">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-kicker text-[#ffd166]">Contact</p>
          <h2 className="section-title text-white">
            Join the mission or start a collaboration.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#e8f0ec]">
            Reach out to volunteer, support, collaborate, or help spread
            awareness for education, women safety, and DKMS stem cell donation.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href="https://www.instagram.com/amritaashray/"
            rel="noreferrer"
            target="_blank"
          >
            <Camera size={26} />
            <span>Instagram</span>
            <strong>@amritaashray</strong>
          </a>

          <div className="contact-card">
            <MapPin size={26} />
            <span>Location</span>
            <strong>Gorakhpur</strong>
          </div>

          <div className="contact-card">
            <MessagesSquare size={26} />
            <span>Volunteer</span>
            <strong>DM to Volunteer | Support | Spread Awareness</strong>
          </div>

          <a
            className="contact-card"
            href="https://www.dkms-india.org/register-now"
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink size={26} />
            <span>DKMS</span>
            <strong>Learn about donor registration</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
