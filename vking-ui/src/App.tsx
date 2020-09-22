import React from 'react';
// import logo from './logo.svg';
import './styles/index.scss';
import { Button, Alert  } from './components/index';
import { ButtonType, ButtonSize} from './components/Button/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>hello world</h1>
        <h2>hello world</h2>
        <h3>hello world</h3>
        <Button className='kingssss' btnType={ButtonType.Primary} size={ButtonSize.Larg} onClick={(e) => {
          alert('12345')
        }}>Larg hello world</Button>
        {/* <Button btnType={ButtonType.Default} size={ButtonSize.Samll}>Samll hello world</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Samll}>Danger hello world</Button>
        <Button btnType={ButtonType.Primary} disabled={true}>hello world</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' target="_blank"> link hello world</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled={true}> link hello world</Button> */}
        <Alert
          // title="Larg hello worldLarg hello worldLarg hello world"
          type="success"
          open={false}
          // show={false}
        >
          AlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlertAlert
        </Alert>
         <p> 
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
