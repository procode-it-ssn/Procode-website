import EventGrid from "@/components/EventGrid";
import { Events } from "@/data/events";
import { parseEventDate } from "@/lib/utils";

export default function EventsPage() {
  // Newest first. Events without a date keep their order in the array and sit last.
  const events = [...Events].sort((a, b) => {
    const aDate = parseEventDate(a.start_date);
    const bDate = parseEventDate(b.start_date);

    if (!aDate && !bDate) return 0;
    if (!aDate) return 1;
    if (!bDate) return -1;

    return bDate - aDate;
  });

  return (
    <main className="pt-16 max-w-6xl w-full mx-auto px-4">
      <div className="font-bold text-4xl font-dm-sans my-16 text-center bg-gradient-to-r from-cyan-400 via-green-500 to-lime-500 text-transparent bg-clip-text">
        Our Events
      </div>

      <div className="pb-16">
        <EventGrid events={events} />
      </div>
    </main>
  );
}
