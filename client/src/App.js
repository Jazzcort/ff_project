import './App.css';
import axios from 'axios'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import SearchingPage from './SearchingPage'
import ListDisplay from './ListDisplay';

function App() {
  const movie1 = { title: "Zinjia", category: "Advanture", img: "http://vwer.com" }
  const movie2 = { title: "Hunger Game", category: "Advanture", img: "http://hunger.com" }
  const movies = [movie1, movie2]

  function apiCall() {
    axios.get('http://localhost:7777/artists').then((data) => {
      console.log(data.data[11])
    })
  }


  const router = createBrowserRouter([
    {
      path: '/:id',
      element: <SearchingPage movies={movies} />
    },
    {
      path: '/list/:id',
      element: <ListDisplay lstNmae="Test" lst={[1, 2, 3, 4, 5]} />
    },
  ])



  return (

    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make api call</button>
      </header>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
