import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const DetallesPersonajes = () => {
const params = useParams();
const [personaje, setPersonajes] = useState([]);
  
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
        .then((res) => res.json())
        .then((data) => {
           console.log(params.idPersonaje) 
          setPersonajes(data);
        });
    }, []);

    console.log(personaje)

  return (
    <div className="contenedorTarjetaDetalle">
      <div className="tarjetaDetalle">
      <img src={personaje.image}></img>
        <div className="texto">
          <h1>{personaje.name}</h1>
          <h3>Gender: {personaje.gender}</h3>
          <h3>Status: {personaje.status}</h3>
          <h3>Origin: {personaje?.location?.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default DetallesPersonajes;
