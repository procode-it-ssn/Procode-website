import { getUser } from "@/lib/server";

export default async function Events() {
  await getUser({ redirect: true });

  return <div>Leaderboards</div>;
}
