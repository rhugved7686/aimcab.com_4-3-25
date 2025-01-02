import Head from 'next/head';

export default function FAQ() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>FAQs - AimCab</title>
        <meta name="description" content="Frequently asked questions about AimCab's services." />
      </Head>

      <header className="bg-yellow-400 py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-2 text-xl">Get the answers to your common queries regarding AimCab.</p>
      </header>

      <main className="container mx-auto p-8">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">General Questions</h2>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">How do I book a cab?</h3>
              <p className="text-gray-600 mt-3">You can book a cab by visiting our website or using our mobile app. Simply enter your pickup and drop-off locations, select the type of vehicle, and confirm your booking.</p>
            </div>

            {/* Question 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">What payment methods are accepted?</h3>
              <p className="text-gray-600 mt-3">We accept various payment methods including credit/debit cards, online wallets, and cash payments (in select cities).</p>
            </div>

            {/* Question 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Can I book a ride in advance?</h3>
              <p className="text-gray-600 mt-3">Yes, you can book a ride in advance through our website or app. Simply choose your desired pickup time and date during the booking process.</p>
            </div>

            {/* Question 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">How can I cancel my booking?</h3>
              <p className="text-gray-600 mt-3">You can cancel your booking directly from the "My Bookings" section in the app or website. Please note that cancellation charges may apply depending on the time of cancellation.</p>
            </div>

            {/* Question 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">What types of vehicles are available?</h3>
              <p className="text-gray-600 mt-3">We offer a variety of vehicles including sedans, SUVs, luxury cars, and more. You can choose the type of vehicle based on your preferences and the size of your group.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Booking & Payment Questions</h2>

          <div className="space-y-6">
            {/* Booking & Payment Question 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Do I need to create an account to book a ride?</h3>
              <p className="text-gray-600 mt-3">No, you can book a ride as a guest. However, creating an account will allow you to save your preferences and easily manage your bookings.</p>
            </div>

            {/* Booking & Payment Question 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Is my payment information secure?</h3>
              <p className="text-gray-600 mt-3">Yes, we use secure encryption technology to process all payments. Your payment information is protected through industry-standard protocols.</p>
            </div>

            {/* Booking & Payment Question 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">What if I face issues during my ride?</h3>
              <p className="text-gray-600 mt-3">If you experience any issues during your ride, please contact our support team immediately through the app or website. We will resolve the issue as soon as possible.</p>
            </div>

            {/* Booking & Payment Question 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Can I get a receipt for my ride?</h3>
              <p className="text-gray-600 mt-3">Yes, once your ride is completed, a receipt will be sent to your registered email address. You can also download it directly from the app or website.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
