import { BookOpenCheck, Megaphone } from "lucide-react";

function About() {
  return (
    <section className="section bg-[#fffaf5]" id="about">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6 text-lg leading-8 text-[#625446]">
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

        <div className="space-y-8">
          <p className="section-kicker">About Amrit Aashray</p>
          <h2 className="section-title">
            A student-led beginning toward a larger dream.
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: BookOpenCheck,
                title: "Education support",
                text: "Learning help with patience, consistency, and dignity.",
              },
              {
                icon: Megaphone,
                title: "Awareness work",
                text: "Women safety, health causes, and social responsibility.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article className="mini-card" key={item.title}>
                  <Icon className="text-[#f28c28]" size={24} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
