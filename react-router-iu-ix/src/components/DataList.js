import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una solicitud a la API y almacenar los datos en el estado
    Axios.get('https://anime-facts-rest-api.herokuapp.com/api/v1')
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
          <li key={item.anime_id}>{item.anime_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
