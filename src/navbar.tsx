import { Component } from "react"

interface NavbarProps {
}
class Navbar extends Component<NavbarProps> {

    constructor(props: NavbarProps) {
        super(props)
    }

    render() {
        return ( 
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </div>        
        ) 
    }
}

export default Navbar