import EventForm from "../EventForm";

export function DataTableRowActions({ row }) {
  const data = row.original;
  const {
    id,
    name,
    description,
    is_handson,
    is_published,
    start_date,
    end_date,
  } = data;
  const event = {
    name,
    description,
    is_handson,
    is_published,
    start_date: new Date(start_date),
    end_date: new Date(end_date),
  };

  return (
    <div className="flex gap-2">
      <EventForm event={event} eventId={id} />
    </div>
  );
}
