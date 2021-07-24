import React, { Component } from 'react';
import SearchBar from './SearchBar';

class IconsNav extends Component {
  render() {
    const mode = this.props.mode;

    return (
      <div className="icon-nav">
        <SearchBar placeholder="Search Identicons" onChange={(e) => this.props.searchData(e.target.value)} />
        
        <ul className={"icon-filter " + mode}>
          <li className={"filter" + (mode==="mono" ? " selected" : "") } onClick={() => this.props.setMode("mono")}>Monochrome</li>
          <li className={"filter" + (mode==="gray" ? " selected" : "") } onClick={() => this.props.setMode("gray")}>Grayscale</li>
        </ul>

        <style jsx>{`

          .icon-nav {
            max-width: 1016px;
            margin: 0 auto 2rem;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;

          }

          .icon-nav > * {
            margin: 0 10px; 
          } 

          .icon-filter {
            display: flex;
            flex-direction: row;
            list-style: none;
            border-radius: 30px;
            background: white;
            padding: 5px;
            margin: 0;
            justify-content: left;
          }

          .filter {
            cursor: pointer;
            font-weight: 400;
            font-size: 18px;
            color: #898C8F;
            padding: 5px 25px;
            transition: background .3s ease-in-out;
            border-radius: 24px;
            
          }

          .filter:last-child {
            margin-left: 15px;
          }

          .filter.selected {
            color: white;
            background: #2A2E35;
          }

          @media(max-width: 765px) {

            .icon-filter {
              width: 100%;
              justify-content: center;
            }

            .icon-nav > * {
              margin: 1rem 0;
            }
          }


          @media(max-width: 550px) {
            .icon-filter {
              justify-content: space-between;
            }
          }

        `}</style>
      </div>
    );
  }
}

export default IconsNav;