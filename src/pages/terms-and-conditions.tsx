import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | LookMenuz</title>
        <meta
          name="description"
          content="Review the terms and conditions for using LookMenuz digital QR menu services."
        />
      </Head>

      <main className="p-6 text-gray-200 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Terms and Conditions
        </h1>

        <p>
          Welcome to LookMenuz! By accessing our website, you agree to comply
          with and be bound by these terms and conditions. If you disagree with
          any part of these terms, please do not use our services.
        </p>

        <p>
          LookMenuz provides a digital menu SaaS platform for restaurants and
          cafés. We reserve the right to modify or discontinue the service with
          or without notice.
        </p>

        <p>
          For any questions, please contact us at{" "}
          <a
            href="mailto:support@lookmenuz.com"
            className="text-yellow-400 underline"
          >
            support@lookmenuz.com
          </a>
          .
        </p>
      </main>
    </>
  );
}
