import { Link } from "react-router-dom"


const Main = () => {
    return (
        <div className="main">
            <div className="img"><img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?h=0046539c&itok=3V9Cx3aQ"></img></div>
            <h1>Bienvenidos al buscador de Rick y Morty</h1>
            <h3>Hace click y busca a tu personaje preferido</h3>
            <Link className="link" to="/personajes">Buscar</Link>
        </div>
        
    )
}

export default Main