import Container from './Container';
import IconGrid from './IconGrid';
import IconsNav from './IconsNav';

const IconSection = (props) => {
  return (
    <section className={"icon-section " + props.mode}>
      <Container>
        <IconsNav mode={props.mode} setMode={props.setMode} />
        <IconGrid mode={props.mode} icons={props.icons} setCurrentIcon={props.setCurrentIcon}/>
      </Container>

      <style jsx>{`
          .icon-section {
            background: #EAECEE;
            padding: 6rem 0;
            border-bottom: 1px solid #ededed;
            transition: background .3s ease-in-out;
          }

          @media(max-width: 600px) {
            .icon-section {
              padding: 6rem 0 3rem;
            }
          }
        `}
      </style>
    </section>
  );
}

export default IconSection;