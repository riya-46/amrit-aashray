import { BookOpenCheck, Gift, Megaphone, ShieldCheck } from "lucide-react";

function About() {
  return (
    <section className="section bg-[#fffaf5]" id="about">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6 text-lg leading-8 text-[#625446]">
          <p className="section-kicker">About Amrit Aashray</p>
          <p>
            Amrit Aashray is a youth-led social initiative from Gorakhpur,
            started with the belief that meaningful change can begin with what
            we are able to do today. As students, our current work focuses on
            helping children learn with love, respect, care, and encouragement
            while building the foundation for a long-term dream of creating an
            orphanage where every child can grow in a safe and dignified
            environment.
          </p>
          <p>
            Alongside education support, Amrit Aashray works on awareness for
            women safety, responsible community action, and important health
            causes. We are also exploring a women safety app and have supported
            DKMS stem cell donation awareness to help more people understand how
            donor registration can save lives.
          </p>
        </div>

        <div className="flex h-full flex-col gap-8 lg:gap-10">
          <div>
            <h2 className="section-title">
              A student-led beginning toward a larger dream.
            </h2>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: BookOpenCheck, title: "Education Support" },
              { icon: Megaphone, title: "Awareness Drives" },
              { icon: ShieldCheck, title: "Women Safety" },
              { icon: Gift, title: "Contribution & Celebration" },
            ].map((item) => {
              const Icon = item.icon;

              return (
              <div
                className="about-chip"
                key={item.title}
              >
                <span className="about-chip-icon">
                  <Icon size={18} />
                </span>
                {item.title}
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
