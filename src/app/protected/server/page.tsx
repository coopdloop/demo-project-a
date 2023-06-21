import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Image from "next/image";

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/protected/server");
  }

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">
          This is a <span className="text-emerald-500">server-side</span>{" "}
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
        <p className="mt-4">session.user.email: {session?.user?.email}</p>{" "}
      </div>
    </section>
  );
};

export default ServerProtectedPage;
