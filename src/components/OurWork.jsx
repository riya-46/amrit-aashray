const workItems = [
  {
    title: "Educating Children",
    accent: "education",
    points: [
      <>
        We teach children from families who cannot afford{" "}
        <strong>regular education support</strong>.
      </>,
      <>
        Many of these children belong to families where parents survive through{" "}
        <strong>begging or daily struggle</strong>.
      </>,
      <>
        We personally guide them with <strong>patience, care, and consistency</strong>.
      </>,
      <>
        We provide <strong>notebooks, pens, pencils, and basic stationery</strong>{" "}
        needed for learning.
      </>,
    ],
  },
  {
    title: "Spreading Awareness",
    accent: "awareness",
    points: [
      {
        text: (
          <>
            On January 1, 2026, we shared an awareness post with steps to
            register with <strong>DKMS</strong>.
          </>
        ),
        linkText: "View post",
        href: "https://www.instagram.com/p/DS9MUD6kv6o/",
      },
      {
        text: "Through the DKMS website, we helped 25+ people register as potential stem cell donors.",
        linkText: "Register with DKMS",
        href: "https://www.dkms-india.org/register",
      },
      <>
        We encourage <strong>blood donation</strong>, and our team members have
        donated blood multiple times.
      </>,
      <>
        We spread awareness about{" "}
        <strong>organ donation, child education, child safety, trafficking</strong>,
        and other important social causes.
      </>,
    ],
  },
  {
    title: "Women Safety",
    accent: "safety",
    points: [
      <>
        We created <strong>VAJRITA</strong>, a women safety app designed around{" "}
        <strong>8 core protection features</strong>.
      </>,
      <>
        The project was initiated on{" "}
        <strong>International Women's Day, March 8, 2026</strong>, with a promise
        to build those 8 safety features.
      </>,
      <>
        VAJRITA is planned for launch on{" "}
        <strong>Father's Day, June 21, 2026</strong>, as a symbol of protection
        and care.
      </>,
      <>
        Just as fathers stand as a shield for their children, VAJRITA aims to
        offer <strong>dependable support</strong> when safety matters most.
      </>,
    ],
  },
  {
    title: "Contribution and Celebration Drives",
    accent: "contribution",
    points: [
      <>
        Amrit Aashray is a <strong>zero-profit initiative</strong>, and we do not
        accept monetary donations or financial support.
      </>,
      <>
        We personally contribute <strong>basic necessities</strong> and encourage
        others to support through useful items only.
      </>,
      <>
        People contribute{" "}
        <strong>clean old clothes, stationery, household items, food packets, and toys</strong>.
      </>,
      <>
        On birthdays, festivals, and special occasions, we celebrate with the
        children and <strong>share something to eat with them</strong>.
      </>,
    ],
  },
];

function OurWork() {
  return (
    <section className="section bg-[#fff3e7]" id="work">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="section-kicker">Our Work</p>
            <h2 className="section-title">
              Work rooted in education, awareness, safety, and meaningful
              community support.
            </h2>
          </div>

          <div className="max-w-xl space-y-4 text-lg leading-8 text-[#625446] lg:pb-3">
            <p>
              Each effort is built around practical help, responsible
              awareness, and consistent action that can make a difference
              today.
            </p>
            <p>
              With volunteers, partners, and community trust, we aim to grow
              dependable support through education, safer choices, women safety
              initiatives, and useful contribution drives. Every step is planned
              to stay close to real needs and bring steady, respectful support.
            </p>
          </div>
        </div>

        <div className="work-carousel mt-10" aria-label="Our work highlights">
          <div className="work-card-sizer" aria-hidden="true">
            {workItems.map((item) => (
              <article
                className={`work-card work-card-${item.accent}`}
                key={`sizer-${item.title}`}
              >
                <h3>{item.title}</h3>
                <div className="work-card-scroll">
                  <ul className="work-card-points">
                    {item.points.map((point, index) => (
                      <li
                        className="work-card-point"
                        key={`sizer-${item.title}-${index}`}
                      >
                        {typeof point === "object" && "text" in point ? (
                          <>
                            {point.text} {point.linkText}
                          </>
                        ) : typeof point === "string" ? (
                          point
                        ) : (
                          point
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="work-card-track">
            {workItems.map((item) => (
              <article
                className={`work-card work-card-${item.accent}`}
                key={item.title}
                tabIndex={0}
              >
                <h3>{item.title}</h3>
                <div className="work-card-scroll" aria-label={`${item.title} details`}>
                  <ul className="work-card-points">
                    {item.points.map((point, index) => (
                      <li
                        className="work-card-point"
                        key={
                          typeof point === "object" && "text" in point
                            ? point.text
                            : `${item.title}-${index}`
                        }
                      >
                        {typeof point === "object" && "text" in point ? (
                          <>
                            {point.text}{" "}
                            <a
                              className="work-card-link"
                              href={point.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {point.linkText}
                            </a>
                          </>
                        ) : typeof point === "string" ? (
                          point
                        ) : (
                          point
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
