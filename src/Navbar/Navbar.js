import { Link } from "react-router-dom"

let Navbar=()=>
{
    return <div>
        <nav className="container ml-10 navbar navbar-expand-lg">
           <a> <img  height="100" width="100" src="https://m.media-amazon.com/images/I/51Iy5h5rqgL.jpg" /></a>
            <div className="ml-10">
                <ul className="navbar-nav">
                   <li className="ml-5 text"><a className="nav-link">Menu</a></li>
                   <li className="ml-3 text"><a className="nav-link">Location</a></li>
                   <li className="ml-3 text "><a className="nav-link">About</a></li>
                   <li className="ml-3 text"><a className="nav-link">Contact</a></li>
                </ul>
            </div>
            <button className="ml-15 btn btn-red">Lognin</button>
        </nav>
        </div>
}
export default Navbar