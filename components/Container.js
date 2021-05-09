import React, { Component } from 'react';

class Container extends React.Component {
  render() {
    const { children } = this.props
  
    return (
      <div className="container">
        { children }

        <style jsx>{`
          .container {
            max-width: 1200px;
            width: auto;
            margin: 0 auto;
            padding: 1rem;
          }

          .container:before, .container:after {
            content: " ";
            clear: both;
            display: block;
          }

          
          @media(max-width: 600px) {
            .container {
            padding: 1rem 2rem;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

export default Container;