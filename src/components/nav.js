import { Link } from "react-router-dom";

const Navbar = ({ bgClass, logo }) => {

    return ( 
        <div className={`${bgClass} grid content-center px-5 md:px-10 py-4 mb-10 md:mb-0`}>
          <Link to={"/"}><img src={logo} alt="" /></Link>
        </div>
     );
}
 
export default Navbar;