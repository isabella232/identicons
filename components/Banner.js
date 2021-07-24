const Banner = ({img, copy}) => {
  return (
    <div className="img-banner">
      <div className="img-banner-image">
        <img  src={img}/>
      </div>
      <p>{copy}</p>

      <style jsx>{`
        .img-banner {
          position: absolute;
          top: 46px;
          right: -24px;
          background: white;
          border-radius: 24px;
          padding: 16px;
          box-shadow: 0px 44.8625px 52.7794px rgba(0, 0, 0, 0.08), 0px 18.7425px 22.05px rgba(0, 0, 0, 0.0575083), 0px 10.0206px 11.789px rgba(0, 0, 0, 0.0476886), 0px 5.61748px 6.6088px rgba(0, 0, 0, 0.04), 0px 2.9834px 3.50988px rgba(0, 0, 0, 0.0323114), 0px -2px 12px rgba(0, 0, 0, 0.04);
        }

        .img-banner p {
          font-size: 16px;
          line-height: 24px;
        }

        .img-banner-image {
          width: 330px;
          overflow: hidden;
          border-radius: 16px;
          margin-bottom: 16px;
        }

        .img-banner-image img {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Banner;