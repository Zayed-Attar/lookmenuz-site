import Head from "next/head";

export default function DeliveryPolicy() {
  return (
    <>
      <Head>
        <title>Delivery & Shipping Policy | LookMenuz</title>
        <meta
          name="description"
          content="LookMenuz is a fully digital platform providing instant online access to your restaurant's digital QR menu and management tools."
        />
      </Head>

      <main className="bg-black text-gray-200 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">
            Delivery & Shipping Policy
          </h1>

          <p className="mb-4">
            LookMenuz is a 100% digital service platform. We do not ship any
            physical products. All services, including digital QR menu creation
            and management, are delivered instantly upon successful payment.
          </p>

          <p className="mb-4">
            Once your subscription or plan payment is confirmed, your restaurant
            dashboard and menu system become active automatically.
          </p>

          <p>
            If you face any technical delay in activation, please contact our
            support team at{" "}
            <a
              href="mailto:support@lookmenuz.com"
              className="text-yellow-400 underline"
            >
              support@lookmenuz.com
            </a>{" "}
            and we’ll resolve it immediately.
          </p>
        </div>
      </main>
    </>
  );
}
