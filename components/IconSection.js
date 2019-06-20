import Container from './Container';
import IconGrid from './IconGrid';

const IconSection = (props) => {
  return (
    <section className="icon-section">
      <Container>
        <IconGrid icons={props.icons} setCurrentIcon={props.setCurrentIcon}/>
      </Container>

      <style jsx>{`
          .icon-section {
            background: rgb(244,244,244);
            padding: 6rem 0;
          }
        `}
      </style>
    </section>
  );
}

export default IconSection;