import React, { Component } from 'react';

class IconGrid extends Component {

  handleClick = key => {
    this.props.setCurrentIcon(key);
  }

  render() {
    const icons = this.props.icons;
    const mode = this.props.mode;
    const baseImgURL = '../static/icons/';
    return (
      <ul className={"icon-grid"}>
        
        {Object.keys(icons).map((key, index) => 
          <li key={key} className={'item-'+ index +' icon-container ' + mode} onClick={() => this.props.setCurrentIcon(key)}>
            <img className="icon" src={ baseImgURL + mode + "/" + icons[key].image + ".svg" } alt={icons[key].name} ></img>
            <p className={"icon-description " + mode}>{icons[key].name}</p>
          </li>
        )}
        
        <style jsx>{`
          .icon-grid {
            display: grid;
            grid-template-columns: repeat(5, 175px);
            grid-auto-rows: minmax(175px, auto);
            grid-column-gap: 32px;
            grid-row-gap: 32px;
            align-content: strech;
            justify-content: center;
            align-items: strech;
            padding: 0;
          }

          .icon-container {
            display: flex;
            flex-flow: row wrap;
            flex-direction: column;
            align-items: center;
            list-style: none;
            margin: 0;
            text-align: center;
            border-radius: 24px;
            cursor: pointer;
            justify-content: center;
            padding: 5px 8px;
            background: white;
            box-shadow: 0;
            transition: box-shadow .3s ease-in-out;
          }

          .icon-description {
            font-size: 0.875rem;
            line-height: 1.5;
            margin: 1em 0 0;
            color: black;
            max-width: 125px;
          }

          .icon-container:hover {
            box-shadow: 0px 44.8625px 52.7794px rgba(0, 0, 0, 0.08), 0px 18.7425px 22.05px rgba(0, 0, 0, 0.0575083), 0px 10.0206px 11.789px rgba(0, 0, 0, 0.0476886), 0px 5.61748px 6.6088px rgba(0, 0, 0, 0.04), 0px 2.9834px 3.50988px rgba(0, 0, 0, 0.0323114), 0px -2px 12px rgba(0, 0, 0, 0.04);
          }

          .icon {
            max-width: 70px;
            max-height: 70px;
            margin-bottom: 10px;
          }

          @media(max-width: 900px) {
            .icon-grid {
              grid-template-columns: repeat(4, 158px);
            }
          }

          @media(max-width: 600px) {
            .icon-grid {
              grid-template-columns: repeat(2, 158px);
            }
          }

        `}
        </style>
      </ul>
    );
  }
}

export default IconGrid;
