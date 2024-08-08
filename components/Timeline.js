import AnimateContent from "./Animations/Animate";
import AnimateDate from "./Animations/AnimateDate";

export default function Timeline({ events }) {
  return events.map(({ name, description, start_date }) => (
    <div key={name + start_date} className="relative border-l border-black dark:border-white/50 pl-8 pb-4 max-w-2xl ml-24 xl:ml-0">
      <div className="pb-12">
        <AnimateDate date={start_date} />
        <div className="w-4 h-4 border rounded-full absolute -top-1 -left-2 z-10 bg-black dark:bg-white" />
        <AnimateContent className="font-bold text-2xl">{name}</AnimateContent>
        <AnimateContent className="mt-2 text-sm  sm:text-base">{description}</AnimateContent>
      </div>
    </div>
  ));
}
