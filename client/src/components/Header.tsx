import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="container flex mx-auto justify-between align-middle my-5 px-2">
      <h1 className="capitalize self-center">
        <Link to="/">Discover weekly saver</Link>
      </h1>
      <div>
        <Link to="/contact" className="mr-2">
          Contact
        </Link>
        <Link
          to="/process/connect-spotify"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Start
        </Link>
      </div>
    </div>
  );
};
