import photoGrid from "../assets/images/photo-grid.png";

const Hero = () => {
  return (
    <section className="hero container">
      <img
        className="hero-image"
        src={photoGrid}
        alt="photo grid"
      />
      <h1 className="hero-title">Online Experiences</h1>
      <h2 className="hero-strapline">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</h2>
    </section>
  )
}

export default Hero;