
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
          padding:2rem 0 2rem;
        }
        
        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-feature-settings: 'pnum' on, 'lnum' on;
          letter-spacing: -0.03em;
          line-height: 80px;
          font-size: 4em;
          max-width: 75rem;
          margin: 0 auto 2rem;
        }

        .github {
          margin: -4px 8px 0 0;
        }

        .hero-copy {
          font-size: 1.5rem;
          font-weight: 400;
          font-style: normal;
          line-height: 1.4;
          max-width: 944px;
          margin: 0px auto;
        }

        @media(max-width: 600px) {
        
          .hero-title { 
            margin: 2rem auto 4rem;
          }

          .call-to-action {
            margin: 0px auto  7rem;
          }

          .call-to-action a:last-child {
            margin-left: 0;
            margin-top: 25px;
          }

          .call-to-action a {
            width: 100%;
          }
        }
      `}
      </style>
    </div>
  )
} 

export default Hero;

