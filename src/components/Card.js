import {Link} from "react-router-dom"

const Card = ({
  nameCharacter,
  imgCharacter,
  statusCharacter,
  speciesCharacter,
  idCharacter
}) => {

  return (
    <div className="tarjeta">
      <div className="imagen">
        {" "}
        <img src={imgCharacter} alt="imagen-personaje"></img>
      </div>
      <div className="texto">
        <h2 className="nombre">{nameCharacter}</h2>
        
        <h4> Species: {speciesCharacter}</h4>
        <div className="status">
        <h4> Status: {statusCharacter}</h4> <div className={statusCharacter === "Alive" ? "status-green" : "status-red"}></div>
        </div>
        <Link className="link" to={`/personajes/${idCharacter}`}>Ir a detalle</Link>
      </div>
    </div>
  );
};

export default Card;
