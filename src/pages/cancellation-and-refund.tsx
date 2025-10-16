export default function CancellationAndRefund() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Cancellation & Refund Policy
      </h1>
      <p className="max-w-2xl text-center text-gray-300 leading-relaxed">
        At LookMenuz, we strive to ensure complete satisfaction with our
        services. Once a subscription is activated, cancellation and refund are
        not applicable. However, if you experience any issues with your account
        or billing, please contact our support team at{" "}
        <a
          href="mailto:support@lookmenuz.com"
          className="text-yellow-400 underline"
        >
          support@lookmenuz.com
        </a>
        . We will review your request and assist you promptly.
      </p>
    </div>
  );
}
