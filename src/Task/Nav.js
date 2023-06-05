import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <ul className="Nav">
            <li><Link to="/">Todos</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="adduser">Add User</Link></li>
                      
            
        </ul>
    )
}
export default Nav;