import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | LookMenuz</title>
        <meta
          name="description"
          content="Review the terms and conditions for using LookMenuz digital menu platform."
        />
      </Head>
      <main className="p-6 text-gray-200 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Terms and Conditions
        </h1>
        <p>
          Welcome to LookMenuz. By using our website, products, or services, you
          agree to these terms and conditions. If you disagree with any part,
          please do not use our services.
        </p>
        <p>
          Users must ensure that the information they provide is accurate.
          LookMenuz reserves the right to modify or discontinue any part of the
          service without prior notice.
        </p>
        <p>
          For queries about our terms, please contact us at{" "}
          <a href="mailto:support@lookmenuz.com" className="text-yellow-400">
            support@lookmenuz.com
          </a>
          .
        </p>
      </main>
    </>
  );
}
