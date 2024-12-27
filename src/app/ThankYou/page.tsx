// pages/thank-you.js
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Thank You for Your Submission!
        </h1>
        <p className="text-gray-600 mb-6">
          We appreciate your response. You will be redirected shortly.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
