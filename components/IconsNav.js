import React, { Component } from 'react';

class IconsNav extends Component {
  render() {
    const mode = this.props.mode;

    return (
      <div className="icon-nav">
        <ul className={"icon-filter " + mode}>
          <li className={"filter" + (mode==="mono" ? " selected" : "") } onClick={() => this.props.setMode("mono")}>Monochrome</li>
          <li className={"filter" + (mode==="gray" ? " selected" : "") } onClick={() => this.props.setMode("gray")}>Grayscale</li>
        </ul>
        <style jsx>{`

          .icon-nav {
            text-align: center;
            padding-right: 20px;
            margin-bottom: 4rem;
          }

          .filter {
            display: inline-block;
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 600;
            color: black;
          }

          .filter:last-child {
            margin-left: 15px;
          }

          .filter.selected {
            border-bottom: 2px solid black;
          }

          .dark .filter.selected {
            border-bottom: 2px solid white;
          }

          .dark .filter {
            color: white;
          }

        `}</style>
      </div>
    );
  }
}

export default IconsNav;