import React, { useEffect, useState } from 'react';
import './index.css';
import PersistentDrawerLeft from './sidebar';
const Facebookdashboard = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setData(json))

  }, [])
  console.log(data)
  return (
    <div>
      <PersistentDrawerLeft/>

    </div>

  )
}
export default Facebookdashboard
