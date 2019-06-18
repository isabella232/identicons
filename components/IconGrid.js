import React, { Component } from 'react';

class IconGrid extends Component {
  render() {
    return (
      <ul className="icon-grid">
        <li className="icon">Icon</li>
        <li className="icon">Icon</li>
        <li className="icon">Icon</li>
        <li className="icon">Icon</li>
        <li className="icon">Icon</li>
        <li className="icon">Icon</li>
        <li className="icon">Icon</li>
        <li className="icon">Icon</li>

        <style jsx>{`
          .icon-grid {
            display: grid;
            grid-template-columns: 12.5% 15px 12.5% 15px 12.5% 15px 12.5% 15px 12.5% 15px 12.5% 15px 12.5% 15px 12.5%;
          }

          .icon {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
        </style>
      </ul>
    );
  }
}

export default IconGrid;