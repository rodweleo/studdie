import { getServerAuthSession } from "@/server/auth";

export default async function Profile() {
  const authSession = await getServerAuthSession();
  return (
    <main>
      Profile
      {authSession?.user?.name}
    </main>
  );
}
