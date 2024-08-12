import Timeline from "@/components/Timeline";
import { supabase } from "@/lib/server";

export default async function Events() {
  const { data: events, error} = await supabase()
    .from("events")
    .select()
    .eq("is_published", true)
    .order("start_date", { ascending: false });
  
  let past_events = [];
  let upcoming_events = [];

  if (error) {
    console.error("Error fetching events:", error);
  } else {
    const current_time = new Date();

    past_events = events.filter(event => new Date(event.end_date) < current_time);
    upcoming_events = events.filter(event => new Date(event.end_date) >= current_time);
  
    // console.log("Past Events:", past_events);
    // console.log("Upcoming Events:", upcoming_events);
  }

  return (
    <main className="pt-16 max-w-6xl w-full mx-auto px-4">
      <div className="font-bold text-4xl font-dm-sans my-16 bg-gradient-to-r from-cyan-400 via-green-500 to-lime-500 text-transparent bg-clip-text">Upcoming Events</div>

      <Timeline events={upcoming_events} isUpcoming={true}/>

      <div className="font-bold text-4xl font-dm-sans my-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Past Events
      </div>


      <Timeline events={past_events}isUpcoming={false}/>
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
