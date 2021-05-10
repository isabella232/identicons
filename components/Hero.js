
import Container from "./Container"

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <h1 className="hero-title">A visual language for identity</h1>
        <p className="hero-copy">Royalty-free, free-to-use icons and clipart representing fundamental identity concepts. Use them in presentations, specifications and documentation.</p>
      </Container>
     
      <style jsx>{`

        .hero {
          text-align: center;
          background: #EAECEE;
          padding: 3rem 0 2rem;
        }
        
        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-feature-settings: 'pnum' on, 'lnum' on;
          letter-spacing: -0.03em;
          line-height: 80px;
          font-size: 4em;
          max-width: 75rem;
          margin: 0 auto 1.5rem;
        }

        .github {
          margin: -4px 8px 0 0;
        }

        .hero-copy {
          font-size: 1.5rem;
          font-weight: 400;
          font-style: normal;
          line-height: 1.4;
          max-width: 885px;
          margin: 0px auto;
        }

        @media(max-width: 600px) {
        
          .hero-title { 
            margin: 0 auto 2rem;
            font-size: 3em;
            line-height: 50px;
          }
        }
      `}
      </style>
    </div>
  )
} 

export default Hero;

