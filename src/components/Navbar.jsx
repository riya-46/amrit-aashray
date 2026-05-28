function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <img src="/logo.png" alt="Amrit Aashray logo" />
        <span>Amrit Aashray</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Our Work</a>
        <a href="#impact">Impact</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
