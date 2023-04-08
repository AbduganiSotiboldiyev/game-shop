function Footer () {
    return(
        <div className="footer">

            <footer className="page-footer">
            <div className="container">
                <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">We offer</h5>
                    <p className="grey-text text-lighten-4">Find any game personal you want and <br></br> use it onyour own game </p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Get the link</h5>
                    <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Easy connect</a></li>

                    </ul>
                </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                {new Date().getFullYear()} : Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">More features </a>
                </div>
            </div>
            </footer>
        </div>
        )
}

export default Footer