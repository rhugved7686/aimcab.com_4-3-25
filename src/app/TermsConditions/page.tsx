import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Terms and Conditions - AimCab</title>
        <meta name="description" content="Terms and conditions for using AimCab services." />
      </Head>

      <header className="bg-yellow-400 py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="mt-2 text-xl">Please read these terms and conditions carefully before using AimCab services.</p>
      </header>

      <main className="container mx-auto p-8">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to AimCab! These terms and conditions govern your use of our website and services. By using AimCab's services, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. Use of Services</h2>
          <p className="text-gray-700 mb-4">
            AimCab provides a platform for users to book cab services. By using our services, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide accurate and complete information when creating an account or booking a ride.</li>
            <li>Not use the services for any illegal or unauthorized purposes.</li>
            <li>Follow all applicable laws and regulations regarding the use of our services.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. Account Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify AimCab of any unauthorized use of your account.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Payment Terms</h2>
          <p className="text-gray-700 mb-4">
            By using AimCab's services, you agree to pay the applicable fare for the ride booked, including any taxes, fees, and surcharges. Payments must be made through our approved payment methods. You are responsible for ensuring that your payment details are accurate and up to date.
          </p>
          <p className="text-gray-700 mb-4">
            AimCab reserves the right to change pricing, taxes, and fees at any time without prior notice. We may also charge additional fees for cancellations or no-shows as outlined in our cancellation policy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Ride Cancellations and Refunds</h2>
          <p className="text-gray-700 mb-4">
            You may cancel a ride through our platform subject to cancellation fees. Refunds for cancellations or ride issues are processed based on our refund policy, which may vary depending on the circumstances.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Limitations of Liability</h2>
          <p className="text-gray-700 mb-4">
            AimCab will not be held liable for any damages or losses arising from the use of our services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Any delays or failures in service.</li>
            <li>Personal injury or property damage caused during a ride.</li>
            <li>Unauthorized access to your account or payment information.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Our total liability is limited to the amount paid for the ride in question, and we do not assume liability for indirect or consequential damages.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">6. Privacy and Data Protection</h2>
          <p className="text-gray-700 mb-4">
            AimCab respects your privacy and is committed to protecting your personal data. Please refer to our <a href="/PrivacyPolicy" className="text-yellow-600 hover:text-yellow-700 font-semibold">Privacy Policy</a> for more information on how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">7. Termination</h2>
          <p className="text-gray-700 mb-4">
            AimCab reserves the right to suspend or terminate your account if we determine that you have violated these terms and conditions or engaged in conduct that is harmful to our platform or other users.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">8. Changes to the Terms</h2>
          <p className="text-gray-700 mb-4">
            AimCab reserves the right to modify these Terms and Conditions at any time. We will notify users of significant changes by posting the updated terms on this page. Your continued use of the services after such changes will constitute your acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms and Conditions are governed by the laws of [Your Jurisdiction], and any disputes will be resolved in the competent courts of [Your Jurisdiction].
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about these Terms and Conditions, please contact us at:
          </p>
          <p className="text-gray-700 mb-4">
            AimCab, Customer Service Team <br />
            Email: support@aimcab.com <br />
            Phone: +91 9130030054
          </p>
        </section>
      </main>
    </div>
  );
}
