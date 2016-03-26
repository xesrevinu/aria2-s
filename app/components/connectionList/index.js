import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Aria2 from 'aria2';

class ConnectionList extends Component {
  render () {
    return (
      <div>
        {this.props.connections.map((connection, i) => {
          return (
            <div className="panel panel-default" key={i}>
              <div className="panel-heading">
                Name: {connection.name}
                <Link to={`/connection/${connection.name}`} style={{ float: 'right' }}>
                  <i className="glyphicon glyphicon-flash">进入 Biu~</i>
                </Link>
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
          )
        })}
      </div>
    );
  }
}

const select = state => {
  return {
    GlobalConfig: state.GlobalConfig,
    connections: state.Connections.connections
  };
};

export default connect(select)(ConnectionList);
