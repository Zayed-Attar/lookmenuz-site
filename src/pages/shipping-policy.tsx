import Head from "next/head";

export default function ShippingPolicy() {
  return (
    <>
      <Head>
        <title>Shipping Policy | LookMenuz</title>
        <meta
          name="description"
          content="LookMenuz is a fully digital platform offering instant online services without any physical shipping."
        />
      </Head>

      <main className="p-6 text-gray-200 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Shipping Policy
        </h1>

        <p>
          LookMenuz is a 100% digital service. We do not ship any physical
          products. All services, including menu management and digital QR menu
          access, are delivered instantly via our online platform.
        </p>

        <p>
          Once your payment is confirmed, your restaurant account is activated
          automatically, and you can immediately begin managing your digital
          menu.
        </p>

        <p>
          For any concerns about service delivery or activation, contact us at{" "}
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
