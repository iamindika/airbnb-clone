import logo from '../assets/images/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <img 
        className="nav-logo"
        src={logo} 
        alt="airbnb logo" 
      />
    </nav>
  )
}

export default Navbar;