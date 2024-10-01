import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar" style={{ backgroundColor: '#000a19', padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <div className="navbar-start flex items-center mx-5">
        <span className="text-white text-2xl font-bold">
          GoMeet.<span style={{ color: '#5f43e6' }}>today</span>
        </span>
      </div>
      <div className="navbar-end" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' }}>
        <ul className="menu menu-horizontal flex space-x-2 md:space-x-4">
          <li>
            <Link to="/" className="text-white text-lg hover:bg-gray-700 transition duration-200 p-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-white text-lg hover:bg-gray-700 transition duration-200 p-2 rounded">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-lg hover:bg-gray-700 transition duration-200 p-2 rounded">
              About
            </Link>
          </li>
          <li>
            <Link to="/support" className="text-white text-lg hover:bg-gray-700 transition duration-200 p-2 rounded">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;