import { supabase } from "@/lib/server";
import { numberToRoman } from "@/lib/utils";

export default async function Leaderboard() {
  const { data: leaderboard } = await supabase()
    .from("leaderboard")
    .select()
    .order("score", { ascending: false });

  return (
    <main className="pt-16 max-w-6xl w-full mx-auto px-4">
      <div className="font-bold text-4xl font-dm-sans my-16">Leaderboard</div>

      <div className="pb-16">
        {leaderboard.map(({ digital_id, score, name, year }) => (
          <div key={digital_id} className="flex gap-4">
            <div className="font-bold text-lg">{name}</div>
            <div>{score}</div>
            <div>{numberToRoman(year)}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
