import { Camera, MapPin, MessageCircle, Rocket } from "lucide-react";

const stats = [
  {
    icon: Camera,
    value: "33+",
    label: "awareness posts",
  },
  {
    icon: MessageCircle,
    value: "146+",
    label: "Instagram community",
  },
  {
    icon: MapPin,
    value: "Gorakhpur",
    label: "local initiative",
  },
  {
    icon: Rocket,
    value: "In progress",
    label: "women safety app",
  },
];

function Impact() {
  return (
    <section className="section bg-[#1f4d5c] text-white" id="impact">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-kicker text-[#ffd166]">Impact</p>
          <h2 className="section-title text-white">
            A young initiative growing through consistency and trust.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#e8f0ec]">
            The current impact is built through awareness posts, volunteer
            interest, local conversations, and ongoing planning for safer
            community tools.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article className="impact-card" key={item.label}>
                <Icon className="text-[#ffd166]" size={26} />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Impact;
