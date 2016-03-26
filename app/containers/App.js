import React, { Component, PropTypes } from 'react';
import Header from '../components/header'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;

