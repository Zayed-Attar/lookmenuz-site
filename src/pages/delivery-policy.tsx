import Head from "next/head";

export default function DeliveryPolicy() {
  return (
    <>
      <Head>
        <title>Delivery & Shipping Policy | LookMenuz</title>
        <meta
          name="description"
          content="LookMenuz provides fully digital services. Learn about our delivery and activation policy for online products."
        />
      </Head>

      <main className="p-6 text-gray-200 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Delivery & Shipping Policy
        </h1>

        <p>
          LookMenuz is a 100% digital SaaS platform providing QR-based menu and
          restaurant management services. We do not deliver or ship any physical
          goods.
        </p>

        <p>
          Upon successful payment, your account is instantly activated, and you
          receive immediate access to your LookMenuz dashboard and features.
        </p>

        <p>
          In case of any delay or technical issues, please contact our support
          team at{" "}
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
