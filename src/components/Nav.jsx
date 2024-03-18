import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
    const {search, setSearch} = useContext(DataContext);
    return (
        <nav className="Nav">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Post</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search Post"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
