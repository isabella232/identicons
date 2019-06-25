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
            grid-template-columns: repeat(6, 158px);
            grid-auto-rows: minmax(145px, auto);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
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
            border-radius: 3px;
            cursor: pointer;
            justify-content: center;
            padding: 5px 8px;
          }

          .icon-description {
            font-size: 1.2rem;
            line-height: 1.5;
            color: black;
          }

          .icon-description.dark {
            color: white;
          }

          .icon-container:hover {
            background: rgba(0,0,0,0.05);
          }

          .icon-container.dark:hover {
            background: rgba(255,255,255,0.2);
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