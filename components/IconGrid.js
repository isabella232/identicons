import React, { Component } from 'react';

class IconGrid extends Component {
  handleClick = key => {
    this.props.setCurrentIcon(key);
  }

  render() {
    const icons = this.props.icons;
    
    return (
      <ul className="icon-grid">
        
        {Object.keys(icons).map((key, index) => 
          <li key={key} className={'item-'+ index +' icon-container'} onClick={() => this.props.setCurrentIcon(key)}>
            <img className="icon" src={icons[key].images.svg} alt={icons[key].name} ></img>
            <p className="icon-description">{icons[key].name}</p>
          </li>
        )}
        
        <style jsx>{`
          .icon-grid {
            display: grid;
            grid-template-columns: repeat(8, 90px);
            grid-auto-rows: minmax(90px, auto);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            align-content: strech;
            justify-content: center;
            align-items: strech;
            padding: 0;
          }

          .icon-container {
            list-style: none;
            margin: 0;
            text-align: center;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-flow: row wrap;
            justify-content: center;
            padding: 5px 8px;
          }

          .icon-description {
            font-size: 1.2rem;
            line-height: 1.5;
          }

          .icon-container:hover {
            background: rgba(0,0,0,0.05);
          }

          .icon {
            max-width: 70px;
            max-height: 70px;
          }
        `}
        </style>
      </ul>
    );
  }
}

export default IconGrid;