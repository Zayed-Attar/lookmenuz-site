export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Contact Us</h1>
      <p className="max-w-3xl text-center text-gray-300 mb-4">
        For questions, support, or partnership inquiries, feel free to reach
        out.
      </p>
      <p className="text-yellow-400">Email:</p>
      <a
        href="mailto:support@lookmenuz.com"
        className="text-gray-300 underline mb-4"
      >
        support@lookmenuz.com
      </a>
      <p className="text-yellow-400">Phone:</p>
      <p className="text-gray-300">+91 99999 99999</p>
    </div>
  );
}
