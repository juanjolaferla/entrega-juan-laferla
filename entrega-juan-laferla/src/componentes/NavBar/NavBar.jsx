import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>Inmigrante</h1>
<nav>
    <ul>
        <li>Woman Shoes</li>
        <li>Men Shoes</li>
    </ul>
</nav>
<CartWidget/>
    </header>
  )
}

export default NavBar