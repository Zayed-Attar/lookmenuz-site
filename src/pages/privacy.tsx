export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Privacy Policy
      </h1>
      <p className="max-w-3xl text-center text-gray-300 leading-relaxed">
        LookMenuz respects your privacy. We collect limited information such as
        name, contact details, and payment data solely for account management
        and billing purposes. We do not sell or share your data. All payments
        are processed securely via Razorpay.
      </p>
    </div>
  );
}
