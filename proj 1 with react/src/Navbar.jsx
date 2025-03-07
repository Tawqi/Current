import './Navbar.css';
function Navbar() {
    return (
        <nav>
            <img 
                src="//www.beardbrand.com/cdn/shop/files/beardbrand_logo.svg?v=1727386541" 
                alt="Beardbrand logo" 
                style={{ maxHeight: '1.5rem' }}
            />
            <div className="nav-2">    
                <ul className="pages">
                    <li><a href="#about">SHOP</a></li>
                    <li><a href="#services">BEARD</a></li>
                    <li><a href="#contact">HAIR</a></li>
                    <li><a href="#news">BODY</a></li>
                </ul> 
                <div className="nav-btn">
                    <span className="fas fa-magnifying-glass"></span>
                    <span className="fas fa-bag-shopping"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
