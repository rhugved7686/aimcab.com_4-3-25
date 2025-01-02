import Head from 'next/head';

export default function Career() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Careers - AimCab</title>
        <meta name="description" content="Join the AimCab team! Explore career opportunities with us." />
      </Head>

      <header className="bg-yellow-400 py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="mt-2 text-xl">Explore exciting career opportunities at AimCab</p>
      </header>

      <main className="container mx-auto p-8">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Current Openings</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cab Driver</h3>
              <p className="text-gray-600 mb-4">We are looking for friendly, professional, and safe drivers to join our growing team.</p>
              <ul className="text-gray-600 mb-4">
                <li>Full-time position</li>
                <li>Competitive salary and benefits</li>
                <li>Must have a valid driver’s license</li>
              </ul>
              <a href="#applyForm" className="text-yellow-600 hover:text-yellow-700 font-semibold">Apply Now</a>
            </div>

            {/* Job 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h3>
              <p className="text-gray-600 mb-4">Join our customer support team to provide assistance and solutions to our clients.</p>
              <ul className="text-gray-600 mb-4">
                <li>Full-time position</li>
                <li>Work-from-home option available</li>
                <li>Excellent communication skills required</li>
              </ul>
              <a href="#applyForm" className="text-yellow-600 hover:text-yellow-700 font-semibold">Apply Now</a>
            </div>

            {/* Job 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketing Specialist</h3>
              <p className="text-gray-600 mb-4">We are looking for a marketing expert to help us reach a larger audience and grow AimCab.</p>
              <ul className="text-gray-600 mb-4">
                <li>Full-time position</li>
                <li>Strong knowledge of digital marketing</li>
                <li>Experience with social media marketing</li>
              </ul>
              <a href="#applyForm" className="text-yellow-600 hover:text-yellow-700 font-semibold">Apply Now</a>
            </div>
          </div>
        </section>

        {/* Apply Form Section */}
        <section id="applyForm" className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Submit Your Application</h2>

          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="block text-gray-700 text-lg mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg mb-2" htmlFor="position">Position Applying For</label>
              <select
                id="position"
                name="position"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="cab-driver">Cab Driver</option>
                <option value="customer-support">Customer Support</option>
                <option value="marketing-specialist">Marketing Specialist</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-lg mb-2" htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-600 text-white px-6 py-3 rounded-md text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
