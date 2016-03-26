import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

class UrlsModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      url: '',
      dir: '/tmp'
    };
    this.onDownload = this.onDownload.bind(this);
  }
  onDownload () {
    // 暂时
    const urls = this.state.url.split('\n');
    const aria2 = this.props.aria2;
    // 应该在render之前把全局信息给获取到
    aria2.getGlobalOption((err, res) => {
      // dir = /User/{username}/this.state.dir
      aria2.send('addUri', urls, { 'dir': res.dir + this.state.dir }, (_err, gid) => {
        if (!_err) {
          alert('ok' + this.state.dir);
        }
        // 先不关闭
        // aria2.close();
      });
    });
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
        <div className="form-group">
          <textarea className="form-control"
                    value={this.state.url}
                    onChange={(e) => this.setState({ url: e.target.value })}></textarea>
        </div>
        <div className="form-group">
          <div className='col-md-12'>
            下载路径：<input className="form-control"
                type="text"
                value={this.state.dir}
                onChange={(e) => this.setState({ url: e.target.dir })} />
          </div>
        </div>
        <div className="form-group">
          <button className='btn' onClick={this.onDownload}>
            download
          </button>
        </div>
      </Modal>
    );
  }
}

UrlsModal.propTypes = {
  aria2: PropTypes.object.isRequired
};

export default UrlsModal;
