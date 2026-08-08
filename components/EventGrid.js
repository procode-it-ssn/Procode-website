import EventCard from "./EventCard";

export default function EventGrid({ events }) {
  if (!events?.length) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        No events to show yet — check back soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
