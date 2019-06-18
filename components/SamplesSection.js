import Container from './Container';

const Samples = () => {

  return (
    <div className="samples-section">
      <Container>
        Samples
      </Container>

      <style jsx>{`
          .samples-section {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            background: rgb(244,244,244);
          }
        `}
      </style>
    </div>
  );
};

export default Samples;