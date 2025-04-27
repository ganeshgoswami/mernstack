import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center text-white m4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2"><b>Oops! The page you're looking for doesn't exist.</b> </p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Home</Link>
    </div>
  );
};

export default NotFound;



