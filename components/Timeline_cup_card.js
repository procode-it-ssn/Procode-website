export default function TimelineCard({
  start_date,
  name,
  description,
  isLeft,
}) {
  return (
    <div className="relative flex w-full py-8">
      <div
        className={`w-4 h-4 bg-green-500 rounded-full absolute top-1/2 -m-1.5`}
      />

      <div
        className={`max-w-md p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg border dark:border-gray-700 relative transition-all 
          shadow-purple-400/50 shadow-mdduration-300 ease-in-out 
          hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 
          hover:border-2 hover:border-green-500 ${
            isLeft ? "left-10" : "left-10"
          }`}
      >
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          {start_date}: {name}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
