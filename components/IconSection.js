import Container from './Container';
import IconGrid from './IconGrid';

const IconSection = () => {
  return (
    <section className="icon-section">
      <Container>
        <IconGrid />
      </Container>

      <style jsx>{`
          .icon-section {
            background: rgb(244,244,244);
          }
        `}
      </style>
    </section>
  );
}

export default IconSection;