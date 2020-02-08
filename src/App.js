import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
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
        <Route path="/generos/novo" exact component={NovoGenero} />
        <Route path="/generos/:id" exact component={EditarGenero} />
        <Route path="/generos" exact component={Generos} />
      </div>
    </Router>
  )
}

export default App