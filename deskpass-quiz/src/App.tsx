import React from 'react';
import './App.css';
import Tooltip from 'rc-tooltip';
import '../node_modules/rc-tooltip/assets/bootstrap_white.css'
/*
#### My Answer

- file location: `./deskpass-quiz/src/App.tsx`
- test method: Visual inspection
    1. `cd deskpass-quiz` and `npm start`
    2. Hover mouse over text. 
- Git repo used: [`https://github.com/react-component/tooltip`](https://github.com/react-component/tooltip)

#### Comments

&emsp; The keyword in this question is "implement", meaning I don't necessarily need to "create" the component myself.
*/
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
