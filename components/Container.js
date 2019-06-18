import React, { Component } from 'react';

class Container extends React.Component {
  render() {
    const { children } = this.props
  
    return (
      <div className="container">
        { children }

        <style jsx>{`
          .container {
            max-width: 1016px;
            width: auto;
            margin: 0 auto;
            padding: 1rem;
          }

          .container:before, .container:after {
            content: " ";
            clear: both;
            display: block;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Container;