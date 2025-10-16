import Head from "next/head";

export default function ShippingPolicy() {
  return (
    <>
      <Head>
        <title>Shipping Policy | LookMenuz</title>
        <meta
          name="description"
          content="Learn about LookMenuz's digital service delivery and shipping policy."
        />
      </Head>

      <main className="p-6 text-gray-200 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Shipping Policy
        </h1>

        <p>
          LookMenuz provides fully digital SaaS services and does not involve
          physical shipping of goods.
        </p>

        <p>
          Once your payment is confirmed, your account and features are
          activated immediately. You can access your dashboard and manage your
          restaurant’s menu in real-time.
        </p>

        <p>
          For any queries, please reach out at{" "}
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
