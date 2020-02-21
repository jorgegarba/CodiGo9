import React from 'react'
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route path='/' exact component={Join}/>
      <Route path='/chat' exact component={Chat}/>
    </Router>
  )
}
