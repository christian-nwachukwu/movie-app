import logo from '../logo.svg';

function Navbar () {
    return(
    
        <nav class="navbar">
            <img src={logo} alt="logo"/>
                <ul class="nav">
                    <li><a href="Home">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Products">Products</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
        </nav>

    )
}

export default Navbar