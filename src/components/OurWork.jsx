function OurWork() {
  const workItems = ['Food support', 'Community care', 'Volunteer outreach']

  return (
    <section className="content-section" id="work">
      <p className="eyebrow">Our work</p>
      <h2>Focused programs with direct community impact.</h2>
      <div className="card-grid">
        {workItems.map((item) => (
          <article className="info-card" key={item}>
            <h3>{item}</h3>
            <p>Coordinated support delivered through local volunteers.</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OurWork
