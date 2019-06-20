import React from 'react';

const IconBox = (props) => {
  const icon = props.iconSet[props.currentIcon];

  return (
    <div className={props.IconBoxActive ? "icon-box" : "hide icon-box"}>
      <img className="icon" src={icon ? icon.images.svg : ''} alt={icon ? icon.name:''} width='80px'/>
      <div className="icon-description">
        <p className="icon-name">{icon ? icon.name : ""}</p>
        <p className="icon-size">400x400</p>
      </div>
      <div className="icon-download">
        <a href={icon ? icon.images.png : ''} download>PNG</a>
        <a href={icon ? icon.images.svg : ''} download>SVG</a>
      </div>
      <div className="close-box" onClick={() => props.closeIconBox()}>X</div>
      <style jsx>{`
          .icon-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: white;
            border-radius: 3px;
            height: 100px;
            width: 966px;
            position: fixed;
            bottom: 25px;
            left: 50%;
            padding: 10px;
            transform: translateX(-50%);
            -webkit-box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.4);
            -moz-box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.4);
            box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.4);
          }

          .icon-description {
            flex-grow: 2;
            line-height: 1.5;
            padding-left: 10px;
          }

          .icon-name {
            text-transform: uppercase;
            font-weight: 600;
            margin: 0 0 5px;
          }

          .icon-size {
            opacity: 0.4;
          }

          .icon-download {
            align-self: center;
            order: 3;
          }

          .icon-download a {
            padding: 0 10px 0 0;
          }

          .icon-download a:last-child {
            padding: 0 25px 0 0;
          }

          .close-box {
            cursor: pointer;
            align-self: flex-start;
            order: 4;
          }

          .hide {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default IconBox;