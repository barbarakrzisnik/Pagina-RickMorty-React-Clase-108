const Card = ({
  nameCharacter,
  imgCharacter,
  statusCharacter,
  speciesCharacter,
}) => {

  return (
    <div className="tarjeta">
      <div className="imagen">
        {" "}
        <img src={imgCharacter}></img>
      </div>
      <div className="texto">
        <h2 className="nombre">{nameCharacter}</h2>
        
        <h4> Species: {speciesCharacter}</h4>
        <div className="status">
        <h4> Status: {statusCharacter}</h4> <div className={statusCharacter === "Alive" ? "status-green" : "status-red"}></div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
