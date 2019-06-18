
import Container from "./Container"

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <h1 className="hero-title">Universal language for identity</h1>
        <p className="hero-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor sit amet augue sed convallis. Etiam ultricies diam in velit tempor porta. Sed in ipsum at sem pulvinar fermentum.</p>
      </Container>
     
      <style jsx>{`
        .hero {
          text-align: center;
        }

        .hero-title {
          font-size: 4.8rem;
          padding-top: 11.8rem;
          max-width: 67rem;
          margin: 0px auto 4rem;
        }

        .hero-copy {
          font-size: 2rem;
          font-weight: 300;
          line-height: 1.8;
          max-width: 67rem;
          margin: 0px auto 4rem;
        }
      `}
      </style>
    </div>
  )
} 

export default Hero;