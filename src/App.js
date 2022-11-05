import logo from './logo.svg';
import './App.css';

function App() {
  // function for sum
  function sum(param1,param2){
    return sum = param1 + param2;
    // multiply(sum)
  }

  //function for alert
  function showAlert(x){
    alert(x)
  }

  // syntax for callback
  let result = sum(5,5, showAlert)


  mySecond();
  myFirst();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
