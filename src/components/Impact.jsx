import { useEffect, useRef, useState } from "react";
import { BookOpenCheck, HeartHandshake, Megaphone, Users } from "lucide-react";

const impactItems = [
  {
    icon: BookOpenCheck,
    value: 25,
    suffix: "+",
    title: "Children Supported",
  },
  {
    icon: Users,
    value: 147,
    suffix: "+",
    title: "People Connected",
  },
  {
    icon: Megaphone,
    value: 3,
    suffix: "+",
    title: "Awareness Initiatives",
  },
  {
    icon: HeartHandshake,
    value: 5,
    suffix: "+",
    title: "Contribution & Celebration Drives",
  },
];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Impact() {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    if (prefersReducedMotion()) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section impact-section bg-[#fff3e7]"
      id="impact"
      ref={sectionRef}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="impact-intro max-w-xl">
          <p className="section-kicker">IMPACT</p>
          <h2 className="section-title impact-title">
            Small steps.
            <br />
            Real impact.
            <br />
            <span>Growing through care.</span>
          </h2>
          <p className="impact-balance-note">
            Measured progress across learning support, awareness, and community
            care.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {impactItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="impact-card" key={item.title}>
                <div className="impact-card-metric">
                  <span className="impact-card-icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <strong>
                    <CountUp end={item.value} isActive={hasEntered} />
                    {item.suffix}
                  </strong>
                </div>
                <h3>{item.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, isActive }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    if (prefersReducedMotion()) {
      const frameId = requestAnimationFrame(() => setCount(end));
      return () => cancelAnimationFrame(frameId);
    }

    let frameId;
    const duration = 1100;
    const startTime = performance.now();

    const updateCount = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setCount(Math.round(easedProgress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };

    frameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frameId);
  }, [end, isActive]);

  return count;
}

export default Impact;
