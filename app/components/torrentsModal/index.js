import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

class TorrentsModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
        no no no 
      </Modal>
    );
  }
}

TorrentsModal.propTypes = {
  
};

export default TorrentsModal;

