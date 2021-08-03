import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">
        <h1>White Notas 📝</h1>
      </div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/#" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
