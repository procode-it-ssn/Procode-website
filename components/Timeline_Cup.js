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
          if(name == "Registration & Idea Submissions") {
            return (
              <a href="#reg-link">
                <TimelineCard
                  key={name + start_date}
                  start_date={start_date}
                  name={name}
                  description={description}
                  isLeft={isLeft}
                />
              </a>
              
            );
          }
          if(name == "Problem Statement Release") {
            return (
              <a href="#ps-statements">
                <TimelineCard
                  key={name + start_date}
                  start_date={start_date}
                  name={name}
                  description={description}
                  isLeft={isLeft}
                />
              </a>
              
            );
          }
          else {
            return (
              <TimelineCard
                key={name + start_date}
                start_date={start_date}
                name={name}
                description={description}
                isLeft={isLeft}
              />
            );
          }
        })}
      </div>
    </div>
  );
}