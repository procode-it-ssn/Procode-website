import Timeline from "@/components/Timeline";
import { supabase } from "@/lib/server";

export default async function Events() {
  const { data: events } = await supabase()
    .from("events")
    .select()
    .eq("is_published", true)
    .order("start_date", { ascending: false });

  return (
    <main className="pt-16 max-w-6xl w-full mx-auto px-4">
      <div className="font-bold text-4xl font-dm-sans my-16">All Events</div>

      <Timeline events={events} />
      {/* <ul className="space-y-8">
        {events.map(({ id, name, description, start_date, end_date }) => (
          <li key={id} className="flex gap-4 border p-4 rounded-md dark:bg-slate-800">
            <div className="max-w-xl w-full">
              <div className="font-bold text-xl my-4">{name}</div>
              <div className="">{description}</div>
            </div>
            <div>Date: {format(start_date, "dd MMM yy")}</div>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
