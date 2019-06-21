
import Container from "./Container"

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <h1 className="hero-title">A visual language for identity</h1>
        <p className="hero-copy">Auth0 is releasing a set of royalty-free, free-to-use icons and clipart representing fundamental identity concepts and artifacts frequently used to describe topologies and solutions in presentations, specifications and documentation. For more information visit our <a href="#" target="_blank">blog post</a>.</p>
        <div className="call-to-action">
          <a className="btn btn-transparent btn-lg" href="../static/icons/identicons-set.zip" download>⬇ Download Set</a>
          <a className="btn btn-transparent btn-lg" href="https://github.com/auth0/identicons/pull/new/master" > 
            <img className="github" src="../static/site/github-icon.svg" width="18"></img>
             Contribute
          </a>
        </div>
      </Container>
     
      <style jsx>{`
        .hero {
          text-align: center;
          background: rgb(244,244,244);
        }
        
        .hero-title {
          padding-top: 7rem;
          font-size: 4.8rem;
          max-width: 75rem;
          margin: 4rem auto;
        }

        .call-to-action {
          margin: 0px auto  11.8rem;
        }

        .call-to-action a:last-child {
          margin-left: 25px;
        }

        .github {
          margin: -4px 8px 0 0;
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