"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

const ClientProtectPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin?callbackUrl=/protected/client");
    },
  });

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">
          This is a <span className="text-emerald-500">client-side</span>{" "}
          protected page
        </h1>
        <h2 className="mt-4 font-medium">You are logged in as:</h2>
        <div className="relative h-10 w-10 mt-4">
          <Image
            src={session?.user?.image!}
            alt={session?.user?.name!}
            className="inline-block rounded-full"
            fill
          />
        </div>
        <p className="mt-4">session.user.name: {session?.user?.name}</p>
        <p className="mt-4">session.user.email: {session?.user?.email}</p>
      </div>
    </section>
  );
};

export default ClientProtectPage;
