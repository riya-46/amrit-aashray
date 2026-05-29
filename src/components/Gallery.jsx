function Gallery() {
  const images = [
    {
      src: "/gallery/img1.jpg",
      title: "Education moments",
      text: "Learning support with patience and encouragement.",
    },
    {
      src: "/gallery/img2.jpg",
      title: "Awareness work",
      text: "Simple messaging for causes that need attention.",
    },
    {
      src: "/gallery/img3.jpg",
      title: "Women safety planning",
      text: "Building digital ideas for safer communities.",
    },
    {
      src: "/gallery/img4.jpg",
      title: "Volunteer energy",
      text: "People joining hands to support and spread awareness.",
    },
  ];

  return (
    <section className="section bg-[#fffaf5]" id="gallery">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Gallery</p>
            <h2 className="section-title">
              A visual glimpse of the causes Amrit Aashray stands for.
            </h2>
          </div>
          <a
            className="text-link"
            href="https://www.instagram.com/amritaashray/"
            rel="noreferrer"
            target="_blank"
          >
            View Instagram
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {images.map((image) => (
            <article className="gallery-card" key={image.src}>
              <img src={image.src} alt={image.title} />
              <div>
                <h3>{image.title}</h3>
                <p>{image.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
