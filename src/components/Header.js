function Header({language,langHandler = Function.prototype}) {
    return (
        <div className="header"> 
            <nav>
            <div className="nav-wrapper">
                <a href="t.me/abdugani0304" className="brand-logo ">Game Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">Contact</a></li>
                <li><a href="collapsible.html">About Us</a></li>
                <li ><a href="##" onClick={() => langHandler()} >{language ? "en" : "ru"}</a></li>
                

                </ul>
            </div>
            </nav>
        </div>
        )
}

export default Header