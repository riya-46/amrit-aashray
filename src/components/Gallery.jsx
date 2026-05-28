function Gallery() {
  const images = ['/gallery/img1.jpg', '/gallery/img2.jpg']

  return (
    <section className="content-section" id="gallery">
      <p className="eyebrow">Gallery</p>
      <h2>Moments from our community work.</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <img src={image} alt="Amrit Aashray activity" key={image} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
