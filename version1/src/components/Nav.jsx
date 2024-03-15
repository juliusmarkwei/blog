// import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
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
                <li>Home</li>
                <li>Post</li>
                <li>About</li>
            </ul>
        </nav>
    );
};

export default Nav;
