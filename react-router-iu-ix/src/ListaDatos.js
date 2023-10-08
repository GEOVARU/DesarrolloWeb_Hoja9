import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaDatos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aquí realiza la solicitud HTTP para obtener datos de la API y almacénalos en el estado "data".
    // Puedes usar Axios u otra biblioteca de tu elección.
    // Ejemplo:
    // axios.get('URL_DE_LA_API')
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // Ejemplo de datos ficticios para propósitos de demostración:
    const dummyData = [
      { id: 1, name: 'Dato 1' },
      { id: 2, name: 'Dato 2' },
      // ... Agrega más datos aquí ...
    ];

    setData(dummyData);
  }, []);

  return (
    <div>
      <h2>Lista de Datos</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDatos;
