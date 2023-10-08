import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetallesDato() {
  const { id } = useParams();
  const [dato, setDato] = useState(null);

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener detalles del dato con el ID proporcionado.
    // Puedes usar Axios u otra biblioteca de tu elección.
    // Ejemplo:
    // axios.get(`URL_DE_LA_API/${id}`)
    //   .then((response) => {
    //     setDato(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // Ejemplo de datos ficticios para propósitos de demostración:
    const dummyDato = { id: 1, name: 'Dato 1', description: 'Descripción del Dato 1' };
    setDato(dummyDato);
  }, [id]);

  if (!dato) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Dato</h2>
      <h3>{dato.name}</h3>
      <p>{dato.description}</p>
    </div>
  );
}

export default DetallesDato;
