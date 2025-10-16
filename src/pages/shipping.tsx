import Head from "next/head";

export default function Shipping() {
  return (
    <>
      <Head>
        <title>Shipping Policy | LookMenuz</title>
        <meta
          name="description"
          content="LookMenuz provides fully digital SaaS services with no physical shipping involved. Learn more about our delivery process."
        />
      </Head>

      <main className="p-6 text-gray-200 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Shipping Policy
        </h1>

        <p>
          LookMenuz operates as a 100% digital service provider. Since we
          deliver software and digital access, there is no physical shipping or
          delivery of goods.
        </p>

        <p>
          Once your payment is successfully processed, your LookMenuz account
          and features are activated instantly. You can immediately access your
          dashboard and manage your restaurant’s menu.
        </p>

        <p>
          For any issues or assistance, please contact us at{" "}
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
