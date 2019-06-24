import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.body.classList.add('modal-open');
  }
  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }
  render() {
    return (
      <div className="modall" onClick={() => this.props.closeModal()}>
        <img className="modall-image" src={this.props.image ? this.props.image : ""} alt={this.props.imageName ? this.props.imageName : ""} />
        <style jsx> {`
          .modall {
            background: rgba(0,0,0,0.8);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 20;
          }
          .modall-image {
            background: rgba(0,0,0,0.2);
            position: absolute;
            max-width: 700px;
            max-height: 455px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
        </style>
      </div>
    );
  }
}

export default Modal;