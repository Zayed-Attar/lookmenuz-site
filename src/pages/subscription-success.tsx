/* eslint-disable react/no-unescaped-entities */

export default function SubscriptionSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        🎉 Subscription Payment Received!
      </h1>

      <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
        Thank you for your payment. It may take up to{" "}
        <span className="text-yellow-400 font-semibold">6–12 hours</span>
        to restore your admin access.
      </p>

      <p className="text-gray-300 max-w-md leading-relaxed mb-4">
        To activate your menu access sooner, please send your payment receipt
        and details to
        <span className="text-yellow-400 font-semibold">
          {" "}
          +91 78218 62046{" "}
        </span>{" "}
        on WhatsApp.
      </p>

      <a
        href="https://lookmenuz.com"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200"
      >
        Go Back to LookMenuz
      </a>
    </div>
  );
}
