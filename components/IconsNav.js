import React, { Component } from 'react';

class IconsNav extends Component {
  render() {
    const mode = this.props.mode;

    return (
      <div className="icon-nav">
        <ul className={"icon-filter " + mode}>
          <li className={"filter" + (mode==="light" ? " selected" : "") } onClick={() => this.props.setMode("light")}>Light</li>
          <li className={"filter" + (mode==="dark" ? " selected" : "") } onClick={() => this.props.setMode("dark")}>Dark</li>
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
          }

          .filter:last-child {
            margin-left: 15px;
          }

          .filter.selected {
            border-bottom: 1px solid black;
          }

          .dark .filter.selected {
            border-bottom: 1px solid white;
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