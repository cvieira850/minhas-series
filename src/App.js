import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import Generos from './Generos'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'





function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  },[])
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/generos" component={Generos} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  )
}

export default App