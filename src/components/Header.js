import { Link } from "react-router-dom";
let Header = () => {
    return (
        <div className="navigation">
            <Link className="nav-link" to={'/'}>Shopping cart</Link>
            <div className="nav"><Link className="nav-link" to={'/'}>Home</Link>
                <Link className="nav-link" to={'/cart'}>Cart Page</Link></div>

        </div>
    )
}
export default Header;