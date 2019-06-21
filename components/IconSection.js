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
            padding: 6rem 0;
            border-bottom: 1px solid #ededed;
          }
        `}
      </style>
    </section>
  );
}

export default IconSection;