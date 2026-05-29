import { ArrowRight, Camera, HeartHandshake } from "lucide-react";

function Volunteer() {
  return (
    <section className="section bg-[#fff3e7]" id="volunteer">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="cta-panel">
          <div>
            <p className="section-kicker">Volunteer</p>
            <h2 className="section-title">
              Volunteer, support, or help spread awareness.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625446]">
              You can contribute by teaching, creating awareness content,
              helping with campaigns, sharing verified information, or
              supporting the women safety app work.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              className="primary-button"
              href="https://www.instagram.com/amritaashray/"
              rel="noreferrer"
              target="_blank"
            >
              <Camera size={18} />
              DM on Instagram
            </a>
            <a className="secondary-button" href="#contact">
              Contact Details
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-[#1f4d5c]">
          {["Teach", "Design", "Research", "Spread Awareness", "Build Safety Tools"].map(
            (item) => (
              <span className="skill-chip" key={item}>
                <HeartHandshake size={16} />
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
