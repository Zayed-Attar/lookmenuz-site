import Head from "next/head";

export default function ShippingPolicy() {
  return (
    <>
      <Head>
        <title>Shipping Policy | LookMenuz</title>
        <meta
          name="description"
          content="LookMenuz provides digital SaaS services and does not involve physical shipping. Learn about our service delivery process here."
        />
      </Head>

      <main className="p-6 text-gray-200 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Shipping Policy
        </h1>

        <p>
          LookMenuz is a completely digital platform providing QR menu services
          to restaurants and cafés. We do not ship any physical goods or items.
        </p>

        <p>
          Once your payment is successfully processed, you will receive
          immediate digital access to your LookMenuz dashboard and services.
          There are no physical deliveries involved in our operations.
        </p>

        <p>
          For any questions related to our service delivery or activation
          process, please contact us at{" "}
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
