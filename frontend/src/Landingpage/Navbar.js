import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"white"}}>
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img className="" src="media/images/Stocksphere logo.svg" alt="logoImage" style={{ width: "60%" }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link" to="/Signup">Signup</Link>
            <Link class="nav-link" to="/Login">Login</Link>
            <Link class="nav-link" to="/About">About</Link>
            <Link class="nav-link" to="/Product">Products</Link>
            <Link class="nav-link" to="/Price">Pricing</Link>
            <Link class="nav-link" to="/Support">Support</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}