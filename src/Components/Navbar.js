import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark ">

            <Link class="navbar-brand text-white" to="/">Yadav</Link>
            <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-white"></span>
            </button>

            <div class="collapse navbar-collapse text-white " id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link className="nav-link text-white" to='/'>Home</Link>
                </li>

                <li class="nav-item active">
                    <Link className="nav-link text-white" to='/about-us'>About Us</Link>
                </li>

                <li class="nav-item active">
                    <Link className="nav-link text-white" to='/contact-us'>Contact Us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-white" to='/services'>Services </Link>
                </li>
                
                </ul>
                
            </div>
        </nav>

    )

}

export default Navbar;