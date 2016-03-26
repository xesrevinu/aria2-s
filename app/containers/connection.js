import React, { Component, PropTypes } from 'react';
import Aria2 from 'aria2'
import { connect } from 'react-redux';
import styles from './connection.css';
import {
  showUrlsModal,
  hideUrlsModal,
  showTorrentsModal,
  hideTorrentsModal,
  showMetaLinksModal,
  hideMetaLinksModal
} from '../actions/globalActions';

import UrlsModal from '../components/urlsModal';
import TorrentsModal from '../components/torrentsModal';
import MetaLinksModal from '../components/metaLinksModal';

class Connection extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      err_msg: ''
    };
  }
  componentDidMount () {
    this.aria2 = new Aria2(this.props.connection)
    this.aria2.open((e) => {
      if (e) {
        this.setState({
          loading: false,
          error: true,
          error_msg: true
        });
        return;
      }
    })
    this.aria2.onopen = () => {
      this.setState({
        loading: false,
        error: false,
        error_msg: '',
        success: true
      });
    };
  }
  componentWillUnmount() {
    this.aria2.close();
  }
  render () {
    const connection = this.props.connection;
    if (this.state.loading) {
      return (
        <div>
          loading
        </div>
      );
    }
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            Name: {connection.name}
          </div>
          <div className="panel-body">
            <div>
              Host: {connection.host}
            </div>
            <div>
              port: {connection.port}
            </div>
          </div>
        </div>
        <div className={styles.fuck}>
          <div className="btn-group" role="group" aria-label="...">
            <button type="button"
                    className="btn btn-default"
                    onClick={() => this.props.dispatch(showUrlsModal())}>By URIs</button>
            <button type="button"
                    className="btn btn-default"
                    onClick={() => this.props.dispatch(showTorrentsModal())}>By Torrents</button>
            <button type="button"
                    className="btn btn-default"
                    onClick={() => this.props.dispatch(showMetaLinksModal())}>By Metalinks</button>
          </div>
        </div>
        <UrlsModal isOpen={this.props.showUrlsModal}
                   onRequestClose={() => this.props.dispatch(hideUrlsModal())}
                   aria2={this.aria2} />
        <TorrentsModal isOpen={this.props.showTorrentsModal}
                       onRequestClose={() => this.props.dispatch(hideTorrentsModal())}
                       aria2={this.aria2} />
        <MetaLinksModal isOpen={this.props.showMetaLinksModal}
                        onRequestClose={() => this.props.dispatch(hideMetaLinksModal())}
                        aria2={this.aria2} />
      </div>
    );
  }
}

const select = (state, props) => {
  const { name } = props.params;
  const connection = state.Connections.connections.filter(con => con.name === name)
  // 讲道理这里的connection 只会有一个 因为插入了是做判断了是否存在
  return {
    connection: connection.shift(),
    showUrlsModal: state.GlobalConfig.showUrlsModal,
    showTorrentsModal: state.GlobalConfig.showTorrentsModal,
    showMetaLinksModal: state.GlobalConfig.showMetaLinksModal
  };
};

export default connect(select)(Connection);
