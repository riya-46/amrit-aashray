import { CheckCircle2 } from "lucide-react";

const roadmap = [
  "Build a future orphanage-focused NGO where children without stable care can grow with safety, dignity, education, and emotional support.",
  "Use today's education support as the foundation for a larger child-care model rooted in patience, consistency, and respect.",
  "Continue zero-profit contribution and celebration drives that bring useful items, care, and moments of belonging to children.",
  "Grow awareness and women safety work as part of a responsible community ecosystem around the children we aim to support.",
  "Move step by step from a student-led initiative toward a structured NGO that can provide long-term shelter, learning, and care.",
];

function Vision() {
  return (
    <section className="section bg-[#fffaf5]" id="vision">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="section-kicker">Vision</p>
          <h2 className="section-title">
            Building toward an orphanage where every child can grow with dignity.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#625446]">
            Our long-term vision is to grow Amrit Aashray into an
            orphanage-focused NGO that gives children a safe home, consistent
            education, emotional care, and a dignified environment to grow. The
            work we do today through teaching, awareness, women safety, and
            zero-profit contribution drives is the foundation for that larger
            dream.
          </p>
        </div>

        <div className="roadmap-card">
          <h3>What we are building toward</h3>
          <div className="mt-5 space-y-4">
            {roadmap.map((item) => (
              <div className="roadmap-item" key={item}>
                <CheckCircle2 size={22} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
