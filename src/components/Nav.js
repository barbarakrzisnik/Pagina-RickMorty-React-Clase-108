import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav>
            <h1>Rick & Morty</h1>
            <ul>
                <li><Link className="link" to="/Personajes">Characters</Link></li>
                <li><Link className="link" to="/Episodios">Episodes</Link></li>
                <li><Link className="link" to="/Ubicaciones">Location</Link></li>
            </ul>

            </nav>
        </div>
    )
}

export default Nav
