export default function ProblemCard({ event }) {
  return (
    <div
      className="sm:w-2/6 p-5 border-gray-400 border m-3 bg-white dark:bg-gray-800 rounded-lg 
        shadow-purple-400/50 shadow-md duration-300 ease-in-out 
                   hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 
                   hover:border-2 hover:border-cyan-500"
    >
      <h3 className="font-semibold text-xl dark:text-lime-500">
        {event.title}
      </h3>
      <p className="mt-2 text-md sm:text-base">{event.problem_statement}</p>
    </div>
  );
}
