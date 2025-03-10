import TimelineCard from "@/components/Timeline_cup_card";

export default function TimelineCup({ events }) {
  return (
    <div className="relative max-w-4xl mx-auto p-4 mr-1.5">
      {/* Central Line */}
      <div className="absolute w-1 bg-gray-400 dark:bg-white/50 h-full"></div>

      {/* Timeline Cards */}
      <div className="flex flex-col">
        {events.map(({ name, description, start_date }, index) => {
          const isLeft = index % 2 === 0;
          return (
            <TimelineCard
              key={name + start_date}
              start_date={start_date}
              name={name}
              description={description}
              isLeft={isLeft}
            />
          );
        })}
      </div>
    </div>
  );
}