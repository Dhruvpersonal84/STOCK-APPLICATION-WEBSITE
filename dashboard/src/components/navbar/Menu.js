import { useState , useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Menu() {
  const navigate = useNavigate();

  const [selectedemenu, setselectedmenu] = useState(0)
  const [username,setUsername] = useState("")
  //const [isProfileDropdownOpen,setIsProfileDropdownOpen] = useState(false)


 useEffect(() => {
  // Read ?name= from URL
  const params = new URLSearchParams(window.location.search);
  const urlName = params.get("name");

  if (urlName) {
    localStorage.setItem("username", urlName);
    setUsername(urlName);

    // Remove name from URL after saving (clean URL)
    window.history.replaceState({}, document.title, "/");
  } else {
    const storedName = localStorage.getItem("username");
    if (storedName) setUsername(storedName);
  }
}, []);




  const handlemenu = (index) => {
    setselectedmenu(index)
  }

  const handleProfileClick = (index) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("http://localhost:3000/");
  };

  const activemenuclass = "menu selected"
  const normalmenuclass = "menu"


  return (
    <div className="menu-container">
      <img src="logo.svg" style={{ width: "30%" }} alt="Logoimage" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handlemenu(0)}>
              <p className={selectedemenu === 0 ? activemenuclass : normalmenuclass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/Orders" onClick={() => handlemenu(1)}>
              <p className={selectedemenu === 1 ? activemenuclass : normalmenuclass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/Holdings" onClick={() => handlemenu(2)}>
              <p className={selectedemenu === 2 ? activemenuclass : normalmenuclass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/Positions" onClick={() => handlemenu(3)}>
              <p className={selectedemenu === 3 ? activemenuclass : normalmenuclass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/Funds" onClick={() => handlemenu(4)}>
              <p className={selectedemenu === 4 ? activemenuclass : normalmenuclass}>Funds</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">{username ? username[0].toUpperCase() : "U"}</div>
          <p className="username">{username || "USERID"}</p>
        </div>
      </div>
    </div>
  )
}
