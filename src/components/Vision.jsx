import { CheckCircle2 } from "lucide-react";

const roadmap = [
  "Make education support more consistent and activity driven.",
  "Grow awareness campaigns around health, safety, and social responsibility.",
  "Build a women safety app with practical emergency and awareness features.",
];

function Vision() {
  return (
    <section className="section bg-[#fffaf5]" id="vision">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="section-kicker">Vision</p>
          <h2 className="section-title">
            A safer tomorrow built through education, awareness, and action.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#625446]">
            The long-term vision is a society where children learn with love,
            communities understand important causes, and women feel safer
            through support, awareness, and accessible digital tools.
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
