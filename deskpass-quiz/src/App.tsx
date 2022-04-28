import React from 'react';
import './App.css';
import Tooltip from 'rc-tooltip';
import '../node_modules/rc-tooltip/assets/bootstrap_white.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tooltip
          placement='right'
          trigger={['hover']}
          destroyTooltipOnHide={true}
          overlay={<span>And a spear to go with it!</span>}
          arrowContent={<div className='rc-tooltip-arrow-inner'></div>}
        >
          <p>Here's a tip!</p>
        </Tooltip>
        <Tooltip
          placement='top'
          trigger={['hover']}
          destroyTooltipOnHide={true}
          overlay={<span>I am a tooltip</span>}
          arrowContent={<div className='rc-tooltip-arrow-inner'></div>}
        >
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Tooltip>
        <Tooltip
          placement='bottom'
          trigger={['hover']}
          destroyTooltipOnHide={true}
          overlay={<span>I am a tooltip</span>}
          arrowContent={<div className='rc-tooltip-arrow-inner'></div>}
        >
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Tooltip>
      </header>
    </div>
  );
}

export default App;
