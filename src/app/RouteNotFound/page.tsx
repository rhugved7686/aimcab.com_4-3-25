// pages/404.js
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">Route Not Found</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! The route you're looking for doesn't exist.</p>
        <Link href="/">
          <button className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
