import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/educating1.jpeg",
    alt: "Children learning during an Amrit Aashray session",
    caption: "Learning with care and consistency",
  },
  {
    src: "/gallery/edugirl.jpeg",
    alt: "A child showing her learning notebook",
    caption: "Proud of her learning progress",
  },
  {
    src: "/gallery/contributeNCelebrate4.jpeg",
    alt: "Children gathered during contribution and celebration work",
    caption: "Finding children who need learning support",
  },
  {
    src: "/gallery/26jan.jpeg",
    alt: "A child showing Republic Day learning work",
    caption: "Republic Day: Showing Patriotism through learning and creativity",
  },
  {
    src: "/gallery/edu with no age limit.jpeg",
    alt: "Education support with a child and volunteer",
    caption: "Education has no age limit",
  },
  {
    src: "/gallery/contributeNcelebrate1.jpeg",
    alt: "Children celebrating a special moment with Amrit Aashray volunteers",
    caption: "Sharing joy on special days",
  },
  {
    src: "/gallery/edu.jpeg",
    alt: "Children sitting together during an education support session",
    caption: "Children learning together",
  },
  {
    src: "/gallery/ContributeNCelebrate2.jpeg",
    alt: "Learning and contribution moment with children",
    caption: "Celebrating together",
  },
  {
    src: "/gallery/contribute.jpeg",
    alt: "A child receiving a contribution item",
    caption: "A small moment of play",
  },
  {
    src: "/gallery/masti.jpeg",
    alt: "A joyful child during a celebration activity",
    caption: "Masti with his self-made box",
  },
  {
    src: "/gallery/ContributeNCelebrate3.jpeg",
    alt: "Contribution and celebration moment with children",
    caption: "Sharing smiles on a birthday",
  },
  {
    src: "/gallery/eduu.jpeg",
    alt: "A child writing during an education support session",
    caption: "Small steps toward regular learning",
  },
  {
    src: "/gallery/edu2.jpeg",
    alt: "Education support session with children",
    caption: "Learning with supporting family",
  },
];

const AUTO_SLIDE_MS = 3400;
const MANUAL_RESUME_DELAY_MS = 6800;
const visibleSlots = [-2, -1, 0, 1, 2];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resumeAt, setResumeAt] = useState(0);

  const moveGallery = useCallback((direction, isManual = false) => {
    setActiveIndex((currentIndex) => {
      const nextIndex =
        (currentIndex + direction + galleryImages.length) % galleryImages.length;

      return nextIndex;
    });

    if (isManual) {
      setResumeAt(Date.now() + MANUAL_RESUME_DELAY_MS);
    }
  }, []);

  useEffect(() => {
    const delay = Math.max(AUTO_SLIDE_MS, resumeAt - Date.now());
    const slideTimer = window.setTimeout(() => {
      moveGallery(1);
    }, delay);

    return () => window.clearTimeout(slideTimer);
  }, [moveGallery, activeIndex, resumeAt]);

  const activeImages = useMemo(
    () =>
      visibleSlots.map((slot) => {
        const imageIndex =
          (activeIndex + slot + galleryImages.length) % galleryImages.length;

        return {
          ...galleryImages[imageIndex],
          imageIndex,
          slot,
        };
      }),
    [activeIndex],
  );

  return (
    <section className="section bg-[#fffaf5]" id="gallery">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="gallery-intro">
          <div className="w-full">
            <p className="section-kicker">Gallery</p>
            <h2 className="section-title">
              Real moments of learning, caring, sharing and acts of love with support...
            </h2>
          </div>
        </div>

        <div className="gallery-slider" aria-label="Amrit Aashray gallery">
          <button
            className="gallery-arrow gallery-arrow-left"
            type="button"
            aria-label="Show previous gallery image"
            onClick={() => moveGallery(-1, true)}
          >
            <ChevronLeft aria-hidden="true" strokeWidth={2.4} />
          </button>

          <div className="gallery-track" aria-live="polite">
            {activeImages.map((image) => (
              <figure
                className={`gallery-photo${
                  image.caption ? " gallery-photo-captioned" : ""
                }`}
                data-active={image.slot === 0}
                data-slot={image.slot}
                key={image.src}
                style={{ "--gallery-slot": image.slot }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={image.slot === 0 ? "eager" : "lazy"}
                />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>

          <button
            className="gallery-arrow gallery-arrow-right"
            type="button"
            aria-label="Show next gallery image"
            onClick={() => moveGallery(1, true)}
          >
            <ChevronRight aria-hidden="true" strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
