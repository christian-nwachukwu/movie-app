import logo from '../logo.svg';

function Navbar () {
    return(
    
        <nav class="navbar">
            <img src={logo} alt="logo"/>
                <ul class="nav">
                    <li><a href="Home">Home</a></li>
                    <li><a href="Blog">Blog</a></li>
                    <li><a href="Pricing">Pricing</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Faq">Faq</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
        </nav>

    )
}

export default Navbar