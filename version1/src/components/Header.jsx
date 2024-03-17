import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = ({ title, width }) => {
    return (
        <header className="blog-title">
            <h2>{title}</h2>
            {width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    : <FaLaptop />
                    }
        </header>
    );
};

export default Header;
