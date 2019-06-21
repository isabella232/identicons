import React from 'react';

const IconBox = (props) => {
  const icon = props.iconSet[props.currentIcon];

  return (
    <div className={props.IconBoxActive ? "icon-box" : "hide icon-box"}>
      <img className="icon" src={icon ? icon.images.light.svg : ''} alt={icon ? icon.name:''} width='80px'/>
      <div className="icon-description">
        <p className="icon-name">{icon ? icon.name : ""}</p>
        <p className="icon-size">400x400</p>
      </div>
      <div className="icon-download">
        <p className="download-copy">DOWNLOAD</p>
        <a href={icon ? icon.images.light.png : ''} download>PNG</a>
        <a href={icon ? icon.images.light.svg : ''} download>SVG</a>
      </div>
      <div className="close-box" onClick={() => props.closeIconBox()}>
        <img src="../static/site/icon-close.svg" alt="Close" width="12"/>
      </div>
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
            opacity: 0.8;
          }

          .icon-size {
            opacity: 0.4;
            margin: 0;
          }

          .icon-download {
            align-self: center;
            order: 3;
          }

          .download-copy {
            display: inline-block;
            margin:0 25px 0 0;
            opacity: 0.4;
            font-size: 1.2rem;
          }

          .icon-download a {
            margin: 0 10px 0 0;
            padding: 5px 10px;
            background: rgb(244,244,244);
            border-radius: 3px;
            color: #4A4A4A;
          }

          .icon-download a:last-child {
            margin: 0 20px 0 0;
          }

          .close-box {
            cursor: pointer;
            align-self: flex-start;
            order: 4;
            margin-top: -8px;
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