import logo from '../../assets/Logo.svg'
import '../css/header.css'

const Header = () => {
  return (
      <header>
        <div className='logo'>
        <img src={logo} alt="logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Lab</a></li>     
        </ul>
      </header>
  )
}

export default Header
