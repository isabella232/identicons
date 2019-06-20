import React from 'react';

const IconBox = (props) => {
  const icon = props.iconSet[props.currentIcon];

  return (
    <div className={props.IconBoxActive ? "icon-box" : "hide icon-box"}>
      <img src={icon ? icon.images.svg:''} alt={icon ? icon.name:''} width='40px'/>
      <p>{icon ? icon.name : ""}</p>
      <p onClick={() => props.closeIconBox()}>Cerrar</p>
      <style jsx>{`
          .icon-box {
            display: block;
            background: white;
            border-radius: 3px;
            height: 100px;
            width: 766px;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
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