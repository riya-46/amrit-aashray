import {
  BookOpenCheck,
  Dna,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";

const workItems = [
  {
    icon: BookOpenCheck,
    title: "Education With Love & Care",
    text: "Learning support, activity-based guidance, and encouragement for children who need extra attention.",
  },
  {
    icon: Megaphone,
    title: "Social Awareness",
    text: "Clear, relatable awareness content and drives around causes that matter to the community.",
  },
  {
    icon: ShieldCheck,
    title: "Women Safety App",
    text: "A planned digital safety tool focused on quick support, trusted contacts, and awareness resources.",
    badge: "In progress",
  },
  {
    icon: Dna,
    title: "DKMS Awareness",
    text: "Awareness support for stem cell donation and how donor registration can help save lives.",
  },
  {
    icon: Users,
    title: "Volunteer Action",
    text: "A small volunteer-led team coordinating support, awareness, and community participation.",
  },
  {
    icon: HeartHandshake,
    title: "Digital Outreach",
    text: "Instagram-led awareness, volunteer calls, and simple ways for people to support the mission.",
  },
];

function OurWork() {
  return (
    <section className="section bg-[#fff3e7]" id="work">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Our Work</p>
          <h2 className="section-title">
            Work that combines ground effort, digital awareness, and future
            safety tools.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="work-card" key={item.title}>
                <div className="flex items-start justify-between gap-4">
                  <span className="icon-badge">
                    <Icon size={26} />
                  </span>
                  {item.badge && <span className="status-pill">{item.badge}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
