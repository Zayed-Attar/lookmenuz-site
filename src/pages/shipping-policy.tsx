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
          LookMenuz is a fully digital SaaS platform. We do not ship physical
          goods or products. All our services, including digital menus, are
          provided online via your registered account.
        </p>
        <p>
          Once payment is confirmed, service activation happens instantly. You
          can access your dashboard and start managing your menus immediately.
        </p>
        <p>
          For support, email us at{" "}
          <a href="mailto:support@lookmenuz.com" className="text-yellow-400">
            support@lookmenuz.com
          </a>
          .
        </p>
      </main>
    </>
  );
}
