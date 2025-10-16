export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6 min-h-[calc(100vh-100px)]">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
        LookMenuz
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Empowering restaurants with real-time digital menus — manage, update,
        and share effortlessly with QR codes. No more reprinting menus ever
        again.
      </p>
      <a
        href="mailto:support@lookmenuz.com"
        className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        Get in Touch
      </a>
    </div>
  );
}
