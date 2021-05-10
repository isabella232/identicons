
import Container from "./Container"

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <h1 className="hero-title">A visual language for identity</h1>
        <p className="hero-copy">Royalty-free, free-to-use icons and clipart representing fundamental identity concepts. Use them in presentations, specifications and documentation.</p>
        <div className="call-to-action">
          <a className="btn-dl btn-lg" href="../static/icons/identicons-set-v2.zip" download>Get The Last Version</a>
        </div>
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


        .call-to-action {
          margin: 3rem auto 0;
        }

        .btn-dl {
          background: rgb(99, 93, 255);
          border: none;
          padding: .9rem 1.6rem;
          line-height: 2.4rem;
          color: white;
          font-weight: 500;
          font-size: 1.1rem;
          font-family: Inter, sans-serif;
          transition: background 0.2s ease 0s;
          border-radius: 0.5rem;
          display: initial;
          margin: 0 auto;
          -webkit-box-align: center;
          align-items: center;
        }

        .btn-dl:hover {
          cursor: pointer;
          background: rgb(80, 74, 218);
        }

        .btn-dl::after {
          padding-left: 0.5rem;
          display: inline-block;
          content: "↓";
          box-sizing: border-box;
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

