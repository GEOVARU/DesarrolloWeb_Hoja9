import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una solicitud a la API y almacenar los datos en el estado
    Axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Datos</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
