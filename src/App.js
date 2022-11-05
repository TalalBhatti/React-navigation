import logo from './logo.svg';
import './App.css';
import FirstPage from './components/firstPage';
import SecondPage from './components/secondPage';
import ThirdPage from './components/thirdPage';
import PageNotFound from './components/pagenotfound'
import { 
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
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


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<FirstPage/>}/>
        <Route path='/secondPage' element={<SecondPage/>}/>
        <Route path='/thirdPage' element={<ThirdPage/>}/>
        <Route path='/*'  element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
