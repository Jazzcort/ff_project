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

    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make api call</button>
      </header>
      
    </div>

  );
}

export default App;
