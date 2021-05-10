import React from 'react';

const IconBox = ({iconBoxActive ,currentIcon , mode, closeIconBox}) => {
  const icon = currentIcon;
  const baseImgURL = '../static/icons/';

  return (
    <div className={"icon-box " + (iconBoxActive ? mode : "silence " + mode)}>
      <div className="icon-wrapper">
        <img className="icon" src={icon.image ? baseImgURL + mode + '/svg/' + icon.image + '.svg' : ''} alt={icon ? icon.name:''}/>
      </div>
      <div className="icon-description">
        <p className="icon-name">{icon ? icon.name : ""}</p>
        <p className="icon-size">816 x 816</p>
      </div>
      <div className="icon-download">
        <p className="download-copy">Download</p>
        <a href={icon ? baseImgURL + mode + '/png/' + icon.image + '.png' : ''} download>PNG</a>
        <a href={icon ? baseImgURL + mode + '/svg/' + icon.image + '.svg' : ''} download>SVG</a>
      </div>
      <div className="close-box" onClick={() => closeIconBox()}>
        <img src="../static/site/icon-close.svg" alt="Close" width="12"/>
      </div>
      <style jsx>{`
          .icon-box {
            display: flex;
            color: #BDC4CF;
            position: fixed;
            bottom: 3rem;
            left: 50%;
            padding: 1.5rem 2rem;
            background: #2A2E35;
            flex-direction: row;
            align-items: center;
            border-radius: 24px;
            height: 100px;
            width: 100%; 
            max-width: 1200px;
            transform: translateX(-50%);
            box-shadow: 0px 44.8625px 52.7794px rgba(0, 0, 0, 0.08), 0px 18.7425px 22.05px rgba(0, 0, 0, 0.0575083), 0px 10.0206px 11.789px rgba(0, 0, 0, 0.0476886), 0px 5.61748px 6.6088px rgba(0, 0, 0, 0.04), 0px 2.9834px 3.50988px rgba(0, 0, 0, 0.0323114), 0px -2px 12px rgba(0, 0, 0, 0.04);
            z-index: 11;
            opacity: 1;
            pointer-events: auto;
            transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;
          }

          .icon-box.silence {
            opacity: 0;
            pointer-events: none;
            bottom: 15px;
            transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;
          }

          .icon-box .icon {
            width: 55px;
          }
          .icon-description {
            flex-grow: 2;
            line-height: 1.5;
            padding-left: 10px;
            font-size: 14px;
          }

          .icon-name {
            font-weight: 600;
            margin: 0 0 5px;
          }

          .icon-size {
            margin: 0;
          }

          .icon-download {
            align-self: center;
            order: 3;
          }

          .download-copy {
            display: inline-block;
            margin:0 25px 0 0;
            font-size: 1rem;
          }

          .icon-download a {
            margin: 0 10px 0 0;
            padding: 8px 10px;
            background: #BDC4CF;
            border-radius: 8px;
            color: #2A2E35;
            font-weight: 500;
          }

          .icon-download a:last-child {
            margin: 0 20px 0 0;
          }

          .close-box {
            cursor: pointer;
            align-self: flex-start;
            order: 4;
            margin-top: -5px;
            align-self: center;
          }
          
          @media(max-width: 600px) {

            .dark .icon-wrapper {
              overflow: initial;
            }
            
            .icon-box .icon {
              width: 65px;
            }
          
            .icon-description {
              padding-left: 10px;
              font-size: 12px;
            }

            .download-copy {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IconBox;