export default function ShippingPolicy() {
  return (
    <main className="bg-black text-gray-200 min-h-screen p-6">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Shipping & Delivery Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Digital Service - No Physical Shipping
          </h2>
          <p className="mb-4 leading-relaxed">
            LookMenuz is a 100% digital service platform. We do not ship,
            deliver, or courier any physical products, materials, or items. All
            our services are provided digitally through online access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Service Delivery Timeline
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              Instant Activation
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  Your restaurant dashboard activates{" "}
                  <strong>immediately</strong> upon successful payment
                  confirmation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  Digital QR menu access is available within{" "}
                  <strong>minutes</strong> of account setup
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  All features and management tools are accessible 24/7 from any
                  device
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            How You Receive Our Services
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                Step 1: Payment Confirmation
              </h3>
              <p>
                Once your payment is processed successfully through Razorpay,
                you'll receive an instant confirmation email.
              </p>
            </div>
            <div className="bg-gray-900 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                Step 2: Account Activation
              </h3>
              <p>
                Your account and subscription plan are activated automatically
                within minutes of payment confirmation.
              </p>
            </div>
            <div className="bg-gray-900 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                Step 3: Access Your Dashboard
              </h3>
              <p>
                Log in to your LookMenuz dashboard to start creating and
                managing your digital QR menu immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Service Coverage
          </h2>
          <p className="mb-4 leading-relaxed">
            Our digital services are available globally. You can access
            LookMenuz from anywhere in the world with an internet connection.
            There are no geographical restrictions or additional charges based
            on location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Delivery Issues & Support
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="mb-4">
              If you experience any of the following issues:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Payment completed but account not activated</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Delay in receiving access credentials</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Technical difficulties accessing your dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Features not working as expected</span>
              </li>
            </ul>
            <p className="mb-2">
              <strong className="text-yellow-400">
                Contact our support team immediately:
              </strong>
            </p>
            <p className="ml-4">
              Email:{" "}
              <a
                href="mailto:support@lookmenuz.com"
                className="text-yellow-400 underline hover:text-yellow-300"
              >
                support@lookmenuz.com
              </a>
            </p>
            <p className="ml-4 mt-2 text-sm text-gray-400">
              We typically respond within 2-4 hours during business hours and
              resolve activation issues immediately.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            No Physical Goods Disclaimer
          </h2>
          <p className="leading-relaxed">
            LookMenuz does not manufacture, store, package, or ship any physical
            products. We are exclusively a software-as-a-service (SaaS) platform
            providing digital restaurant management solutions. All transactions
            are for digital services only.
          </p>
        </section>

        <section className="mb-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            <strong>Last Updated:</strong> October 2024
          </p>
          <p className="text-sm text-gray-400 mt-2">
            If you have any questions about our delivery policy, please contact
            us at{" "}
            <a
              href="mailto:support@lookmenuz.com"
              className="text-yellow-400 underline"
            >
              support@lookmenuz.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
