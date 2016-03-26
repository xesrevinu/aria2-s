import React, { Component, PropTypes } from 'react';
import ConnectionList from '../components/connectionList';
import styles from './index.css';

class IndexPage extends Component {
  render() {
    return (
      <div className="container">
        <p className={'h2 ' + styles.title}>
          连接到你的host
        </p>
        <ConnectionList />
      </div>
    );
  }
}


export default IndexPage;
