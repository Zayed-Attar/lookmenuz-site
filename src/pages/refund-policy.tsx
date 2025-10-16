export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Cancellation & Refund Policy
      </h1>
      <p className="max-w-3xl text-center text-gray-300 leading-relaxed">
        LookMenuz offers subscription-based digital services. Once a
        subscription is purchased and activated, it cannot be cancelled or
        refunded. However, in case of technical issues or accidental payments,
        please contact our support team at{" "}
        <a
          href="mailto:support@lookmenuz.com"
          className="text-yellow-400 underline"
        >
          support@lookmenuz.com
        </a>{" "}
        within 48 hours for resolution.
      </p>
    </div>
  );
}
