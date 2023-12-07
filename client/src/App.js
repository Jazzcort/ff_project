import './App.css';
import axios from 'axios'
import {
  useLocation,
} from "react-router-dom"


function App() {
  


  function apiCall() {
    axios.get('http://localhost:7777/artists').then((data) => {
      console.log(data.data[11])
    })
  }




  return (

    <div className="App row">
      <h1 className='col-sm-6 offset-sm-3'>Welcome to MovieList</h1>
      
    </div>

  );
}

export default App;
