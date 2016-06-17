import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from '../../src/Feedback';

const App = React.createClass({
  render(){
    return (
      <div>
        <Feedback />
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('example'));
