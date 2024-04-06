import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';
import ErrorBoundary from './components/error-boundry/error-boundry.component'
import HomePage from './pages/homepage.component'

function App() {
  debugger
  return (
    <div className='App'>
      <ErrorBoundary>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
