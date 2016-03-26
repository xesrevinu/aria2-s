import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

class MetaLinksModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
        no no no
      </Modal>
    );
  }
}

MetaLinksModal.propTypes = {
  
};

export default MetaLinksModal;

