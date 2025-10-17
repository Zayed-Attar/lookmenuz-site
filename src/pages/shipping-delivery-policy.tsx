import React from "react";
import Head from "next/head";

const ShippingPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shipping & Delivery Policy | LookMenuz</title>
        <meta
          name="description"
          content="LookMenuz is a 100% digital SaaS platform. We provide instant online activation — no physical shipping or delivery required."
        />
      </Head>

      <main className="bg-black text-gray-200 min-h-screen p-6">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Shipping & Delivery Policy
          </h1>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Digital Service – No Physical Shipping
            </h2>
            <p className="mb-4 leading-relaxed">
              LookMenuz is a 100% digital platform. We do not ship, deliver, or
              courier any physical items. All our services are delivered online
              and are accessible through your LookMenuz dashboard.
            </p>
          </section>

          {/* Section 2 */}
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
                    <strong>immediately</strong> after payment confirmation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    Your digital QR menu is accessible within{" "}
                    <strong>minutes</strong> of account setup.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    All platform tools are available 24/7 from any device.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
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
                  After your payment via Razorpay, you’ll receive an instant
                  confirmation email.
                </p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  Step 2: Account Activation
                </h3>
                <p>
                  Your account and subscription plan activate automatically
                  within minutes.
                </p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  Step 3: Dashboard Access
                </h3>
                <p>
                  Log in to your LookMenuz dashboard to create and manage your
                  digital QR menu instantly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Service Coverage
            </h2>
            <p className="mb-4 leading-relaxed">
              LookMenuz’s digital services are available globally. You can
              access our platform from anywhere with an internet connection.
              There are no delivery fees or location-based restrictions.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Delivery Issues & Support
            </h2>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="mb-4">
                If you experience any activation or access issues, please
                contact our support team immediately.
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Payment completed but account not activated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Delay in receiving login credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Dashboard access or feature issues</span>
                </li>
              </ul>
              <p className="mb-2">
                <strong className="text-yellow-400">Support Email:</strong>{" "}
                <a
                  href="mailto:support@lookmenuz.com"
                  className="text-yellow-400 underline hover:text-yellow-300"
                >
                  support@lookmenuz.com
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                We typically respond within 2–4 hours during business hours.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              No Physical Goods Disclaimer
            </h2>
            <p className="leading-relaxed">
              LookMenuz does not sell or deliver any physical goods. We are a
              SaaS (Software-as-a-Service) platform providing online restaurant
              menu and management tools. All transactions are purely digital.
            </p>
          </section>

          {/* Footer */}
          <section className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              <strong>Last Updated:</strong> October 2024
            </p>
            <p className="text-sm text-gray-400 mt-2">
              For questions regarding this policy, contact us at{" "}
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
    </>
  );
};

export default ShippingPolicy;
