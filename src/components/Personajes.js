import Card from "./Card.js";
import { useEffect, useState } from "react";


const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, [busqueda]);

 const handleChange = (e) => {
   setBusqueda(e.target.value)
 }

  return (
    <div>
      <div className="busqueda">
        <label>
          Busca a tu personaje favorito
          <input type="text" onChange={handleChange}></input>
        </label>
      </div>
      <div className="seccion-principal">
        {personajes.map((personaje) => (
          <Card
            key={personaje.id}
            imgCharacter={personaje.image}
            nameCharacter={personaje.name}
            statusCharacter={personaje.status}
            speciesCharacter={personaje.species}
            idCharacter={personaje.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Personajes;
