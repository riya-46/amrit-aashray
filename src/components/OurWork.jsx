const workItems = [
  {
    title: "Educating Children",
    points: [
      "We teach children from families who cannot afford regular education support.",
      "Many of these children belong to families where parents survive through begging or daily struggle.",
      "We personally guide them with patience, care, and consistency.",
      "We provide notebooks, pens, pencils, and other basic stationery needed for learning.",
    ],
  },
  {
    title: "Spreading Awareness",
    points: [
      "We organize awareness around causes that directly affect community wellbeing.",
      "DKMS stem cell donor registration is included as part of our awareness work.",
      "We share clear information on women safety, health, and responsible action.",
      "Our aim is to help people understand issues and take meaningful steps.",
    ],
  },
  {
    title: "Women Safety",
    points: [
      "We work toward safer communities through awareness and practical support.",
      "Vajrita is our women safety app focused on quick support and trusted contacts.",
      "The initiative is shaped around real safety needs in everyday situations.",
      "We want women and girls to feel more confident, prepared, and supported.",
    ],
  },
  {
    title: "Contribution and Celebration Drives",
    points: [
      "We plan non-monetary drives for items that are useful in daily life.",
      "Stationery, clothes, household items, food packets, biscuits, and toys are included.",
      "Celebration drives help children feel valued, included, and cared for.",
      "Every contribution is organized around real needs so support reaches meaningfully.",
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
          <div className="work-card-track">
          {workItems.map((item) => (
            <article className="work-card" key={item.title} tabIndex={0}>
              <h3>{item.title}</h3>
              <div className="work-card-scroll" aria-label={`${item.title} details`}>
                <ul className="work-card-points">
                  {item.points.map((point) => (
                    <li className="work-card-point" key={point}>
                      {point}
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
