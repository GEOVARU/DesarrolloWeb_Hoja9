import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function DataDetails() {
  const { id } = useParams();
  const [dataDetails, setDataDetails] = useState({});

  useEffect(() => {
    // Aquí puedes hacer una solicitud a la API para obtener detalles específicos del dato
    Axios.get(`https://api.example.com/data/${id}`)
      .then(response => {
        setDataDetails(response.data);
      })
      .catch(error => {
        console.error('Error al obtener detalles del dato', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalles del Dato</h1>
      <p>Nombre: {dataDetails.name}</p>
      <p>Descripción: {dataDetails.description}</p>
      {/* Añade más detalles según lo que proporcione la API */}
    </div>
  );
}

export default DataDetails;
