import React, { useState } from 'react';
import Container from './Container';
import IconGrid from './IconGrid';
import IconsNav from './IconsNav';
import Fuse from "fuse.js";

const IconSection = ({mode, icons, setMode, setCurrentIcon}) => {
    
    const [data, setData] = useState(icons);

    const searchData = (pattern) => {
      if (!pattern) {
        setData(icons);
        return;
      }
  
      const fuse = new Fuse(data, {
        keys: ["name"],
      });
  
      const result = fuse.search(pattern);
      const matches = [];
      if (!result.length) {
        setData([]);
      } else {
        result.forEach(({item}) => {
          matches.push(item);
        });
        setData(matches);
      }
      console.log(matches);
    };

    return (
      <section className={"icon-section " + mode}>
        <Container>
          <IconsNav mode={mode} setMode={setMode} searchData={searchData}  />
          <IconGrid mode={mode} icons={data} setCurrentIcon={setCurrentIcon}/>
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
                padding: 2rem 0 3rem;
              }
            }
          `}
        </style>
      </section>
    );
}

export default IconSection;