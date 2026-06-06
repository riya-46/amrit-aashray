import { ArrowRight } from "lucide-react";

function Volunteer() {
  return (
    <section className="section bg-[#fffaf5]" id="volunteer">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="cta-panel">
          <div>
            <p className="section-kicker">Volunteer</p>
            <h2 className="section-title">
              Become a volunteer with Amrit Aashray.
            </h2>
          </div>

          <div className="volunteer-copy">
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625446]">
              Support children's education, awareness campaigns, and community
              initiatives through consistent, meaningful action.
            </p>
            <div className="volunteer-action">
              <a
                className="primary-button"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdiM03QHQQ_pn8vVXe7LjDlUT36pzD3pSR_Ny-iz-puv9LKKQ/viewform"
                rel="noopener noreferrer"
                target="_blank"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Volunteer;
