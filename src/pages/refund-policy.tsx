export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Cancellation & Refund Policy
      </h1>
      <p className="max-w-3xl text-center text-gray-300 leading-relaxed">
        All LookMenuz subscriptions are non-refundable once activated. If you
        face technical issues or billing errors, please contact us at{" "}
        <a
          href="mailto:support@lookmenuz.com"
          className="text-yellow-400 underline"
        >
          support@lookmenuz.com
        </a>
        . Refunds will only be processed in genuine cases after verification.
      </p>
    </div>
  );
}
