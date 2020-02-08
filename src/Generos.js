import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
    .get('api/genres')
    .then(res => {
      setData(res.data.data)
    })
  }, [])

  const renderizarLinha = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td >{record.name}</td>
        <td ><button>+</button></td>
      </tr>
    )
  }
  if(data.length === 0) {
    return(
      <div className='container'>
        <h1>Gêneros</h1>
        <div className='alert alert-warning' role='alert'>
          Você não possui gêneros criados.  
        </div>  
      </div>
    )
  }

  return (
    <div  className='container'>
      <h1>Gêneros</h1>
      <Link to='generos/novo'>Novo gênero</Link>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderizarLinha)}
        </tbody>
      </table>
    </div>
  )
}

export default Generos