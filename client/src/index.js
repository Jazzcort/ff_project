import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import SearchingPage from './SearchingPage';
import RootLayout from './layout/RootLayout';
import ErrorPage from './ErrorPage';
import ViewList from './ViewList';

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<RootLayout />}>
      <Route path='/home' element={<App />} />
      <Route path='/search/:id' element={<SearchingPage />} />
      <Route path='/mylist/:id' element={<ViewList />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>

  )
  ))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />


);


