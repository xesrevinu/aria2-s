import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Aria2 from 'aria2';
import {
  showNewConnectionModal,
  hideNewConnectionModal
} from '../../actions/globalActions';
import {
  addConnection
} from '../../actions/connections';

//   host: 'localhost',
//   port: 6800,
//   secure: false,
//   secret: '',
//   path: '/jsonrpc',

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      host: 'localhost',
      port: '6800',
      secure: false,
      secret: '',
      username: '',
      password: '',
      path: '/jsonrpc',
      testing: false,
      success: false,
      failure: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTest = this.onTest.bind(this);
  }
  onChange (e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit (e) {
    e.preventDefault();
    if (!this.state.name) {
      alert('请输入name');
      return;
    }
    if (this.props.connections.length > 0) {
      for (const k of this.props.connections) {
        if (k.name === this.state.name) {
          alert('name 已存在');
          return;
        }
      }
    }
    const config = {
      name: this.state.name,
      host: this.state.host,
      port: this.state.port,
      secure: this.state.secure,
      secret: this.state.secret,
      username: '',
      password: '',
      path: this.state.path
    };
    this.props.dispatch(addConnection(config));
    this.setState({
      name: ''
    });
  }
  onTest (e) {
    this.setState({
      testing: true
    });
    const a = new Aria2({
      host: this.state.host,
      port: this.state.port,
      secure: this.state.secure,
      secret: this.state.secret,
      username: '',
      password: '',
      path: this.state.path
    });
    a.open(e => {
      if (e) {
        this.setState({
          testing: false,
          success: false,
          failure: true
        });
        return;
      }
      this.setState({
        testing: false,
        success: true,
        failure: false
      });
    });
  }
  connectionModal () {
    return (
      <Modal isOpen={this.props.showNewConnectionModal}
               onRequestClose={() => this.props.dispatch(hideNewConnectionModal())}>
        <div>
          <span className='h3'>新建aria2连接</span>
          <button onClick={() => this.props.dispatch(hideNewConnectionModal())} type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <hr />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Enter the name</label>
              <input type="text"
                     className="form-control"
                     placeholder="name"
                     name="name"
                     value={this.state.name}
                     onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Enter the host
              </label>
              <input type="text"
                     className="form-control"
                     placeholder="http(s)://localhost"
                     name="host"
                     value={this.state.host}
                     onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Enter the port
              </label>
              <input type="text"
                     className="form-control"
                     placeholder="port"
                     name='port'
                     value={this.state.port}
                     onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                SSL/TLS encryption:
              </label>
              <div>
                <input type="checkbox" name="secure" checked={this.state.secure} onChange={() => {
                  this.setState({
                    secure: !this.state.secure
                  })
                }} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Enter the secret token (optional):
              </label>
              <input type="text"
                     className="form-control"
                     placeholder="secret"
                     name="secret"
                     value={this.state.secret}
                     onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Enter the username (optional):
              </label>
              <input type="text"
                     className="form-control"
                     placeholder="username"
                     name='username'
                     value={this.state.usernaem}
                     onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Enter the password (optional):
              </label>
              <input type="text"
                     className="form-control"
                     placeholder="password"
                     name="password"
                     value={this.state.password}
                     onChange={this.onChange} />
            </div>
            <button onClick={this.onTest}
                    className="btn btn-default"
                    type="button">
              {this.state.testing ? '连接中' : 'test'}
              {!this.state.testing && this.state.success && '成功'}
              {!this.state.testing && this.state.failure && '失败'}
            </button>
            {' '}
            <button type="submit" className="btn btn-default">确定</button>
          </form>
        </div>
      </Modal>
    );
  }
  render () {
    return (
      <div>
        <nav style={{ borderRadius: 0 }} className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Aria2-S</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="" href="#" onClick={() => this.props.dispatch(showNewConnectionModal())}>创建新连接</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.connectionModal()}
      </div>
    );
  }
}

const select = state => {
  return {
    showNewConnectionModal: state.GlobalConfig.showNewConnectionModal,
    connections: state.Connections.connections
  };
};

export default connect(select)(Header);
