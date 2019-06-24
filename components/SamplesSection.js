import React, { Component } from "react";
import Slider from "react-slick";
import Container from './Container';

class Samples extends Component {

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      centerMode: true
    };
    
    return (
      <Container>
       <div className="section-samples">
          <h4 className="h4">Use cases</h4>
          <Slider {...settings}>
            <div className="item">
              <img onClick={() => this.props.openModal('../static/site/samples/sample-1.jpg', 'Tentants')} src="../static/site/samples/sample-1.jpg" alt="Tentants" width="280" />
            </div>
            <div className="item">
              <img onClick={() => this.props.openModal('../static/site/samples/sample-2.jpg', 'Introduction to Identity')} src="../static/site/samples/sample-2.jpg" alt="Introduction to Identity" width="280" />
            </div>
            <div className="item">
              <img onClick={() => this.props.openModal('../static/site/samples/sample-3.jpg', 'User Directory')}  src="../static/site/samples/sample-3.jpg" alt="User Directory" width="280" />
            </div>
          </Slider>
        </div>

        <style jsx>{`

            .section-samples {
              padding: 7rem 0 10rem;
              position: relative;
            }

            .section-samples:before, .section-samples:after {
              display: block;
              content: '';
              width: 100px;
              top: 0;
              bottom: 0;
              position: absolute;
              background: rgb(255,255,255);
              background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
            }
            .section-samples:before{
              left: 0;
              z-index: 10;
            }
            
            .section-samples:after {
              right: 0;
              z-index: 10;
              transform: rotate(180deg);
            }

            .h4 {
              text-align: center;
              text-transform: uppercase;
              font-size: 1.5rem;
              padding-bottom: 4rem;
              opacity: 1;
            }
            .item {
              padding: 10px 15px;
            }

            .item:focus {
              outline: none;
            }

            .item img {
              border: 4px solid #ededed;
              cursor: pointer;
              margin: 0 45px;
            }
          `}
        </style>
      </Container>
    );
  }
}

export default Samples;