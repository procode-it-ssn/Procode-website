import EventForm from "@/components/EventForm";
import { supabase } from "@/lib/server";

import { columns } from "@/components/EventDataTable/columns";
import DataTable from "@/components/EventDataTable/DataTable";

export default async function OverviewPage() {
  const { data: events, error } = await supabase()
    .from("events")
    .select()
    .order("start_date", { ascending: false });

  return (
    <main className="w-full max-w-4xl mx-auto">
      <div className="flex gap-4 w-full justify-between items-center mb-8">
        <p className="font-bold text-4xl mb-4">All Events</p>
        <EventForm /> 
      </div>
      {error ? (
        <pre>{JSON.stringify(error.message)}</pre>
      ) : (
        <DataTable data={events} columns={columns} />
      )}
    </main>
  );
}
