import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Privacy Policy - AimCab</title>
        <meta name="description" content="Privacy policy for AimCab cab booking service." />
      </Head>

      <header className="bg-yellow-400 py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-xl">Your privacy is important to us. Please review our privacy policy carefully.</p>
      </header>

      <main className="container mx-auto p-8">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            AimCab is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal
            information when you use our services. By using AimCab's services, you agree to the practices described in this policy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect various types of information to provide and improve our services to you:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Personal information, such as name, email address, and phone number when you create an account or book a ride.</li>
            <li>Location information, such as your GPS coordinates, to facilitate cab bookings and ride tracking.</li>
            <li>Payment information, including credit card details, to process payments for rides.</li>
            <li>Usage data, such as interaction with our website and mobile app, to improve our services.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect for various purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>To provide and manage your ride bookings.</li>
            <li>To communicate with you about your rides, promotions, and updates.</li>
            <li>To process payments securely and manage transactions.</li>
            <li>To analyze usage data and improve our services and website performance.</li>
            <li>To comply with legal obligations and resolve any disputes.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We take the security of your personal information seriously and implement various measures to protect it, including encryption
            and secure servers. However, please be aware that no method of online transmission or storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sharing Your Information</h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your personal information to third parties. However, we may share your information with trusted
            third-party service providers for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>To facilitate ride bookings and payments (e.g., payment processors, GPS providers).</li>
            <li>To help us analyze website usage and improve our services (e.g., analytics providers).</li>
            <li>To comply with legal obligations or respond to legal requests (e.g., law enforcement).</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing communications at any time.</li>
            <li>Request the transfer of your data to another service provider.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise these rights, please contact us using the details provided at the end of this Privacy Policy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us
            analyze website traffic, provide personalized content, and improve the functionality of our website. You can adjust your
            browser settings to disable cookies, but please note that some features of the website may not function properly without them.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We
            encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
          </p>
          <p className="text-gray-700 mb-4">
            AimCab, Privacy Team <br />
            Email: privacy@aimcab.com <br />
            Phone: +91 9130030054
          </p>
        </section>
      </main>
    </div>
  );
}
