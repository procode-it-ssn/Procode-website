import teamData from '../teamInfo/teamData.json';
export default function Team() {
  console.log(teamData);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-[4rem] lg:px-[10rem] sm:px-[5rem] md:px-[7rem] px-[3rem]">
      {teamData.map((section) => {
        return (
          <div>
            <h1 className="text-3xl font-bold my-10 text-center">
              {section.title}
            </h1>
            <div className="flex flex-wrap gap-5 mx-auto w-fit justify-center items-center">
              {section.members.map((member) => {
                return (
                  <div className="flex flex-col justify-between bg-white dark:shadow-2xl dark:bg-slate-800 rounded-lg shadow-md pt-8 min-w-[17.5rem]">
                    <div className="px-6">
                      <img
                        className="mx-auto w-40 h-40  rounded-full object-cover drop-shadow-lg"
                        alt={member.name}
                        src={`https://drive.google.com/uc?export=view&id=${member.avatar}`}
                      />
                      <div className="py-3">
                        <p className="text-center font-semibold">
                          {member.name}
                        </p>
                        <p className="text-center text-sm text-gray-800 dark:text-slate-500 pt-1">
                          {member.role}
                        </p>
                        <p className="text-center text-sm text-gray-800 dark:text-slate-500 pt-1">
                          {member.year} Year
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between divide-x border-t divide-gray-400 dark:divide-slate-600 dark:border-slate-500 border-gray-300 rounded-b-lg overflow-hidden">
                      <div className="block flex-1">
                        <a
                          href="/coaches/54/hari-gopal"
                          className="block w-full px-3 py-2 text-center text-sm font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-500"
                        >
                          About
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

{
  /* <Image
              className="mx-auto w-40 h-40 border-4 border-gray-50 rounded-full object-cover"
              alt="Team Member Avatar"
              loader={() =>
                'https://drive.google.com/uc?export=view&id=1eRhWn2wzH9gUGOvRTtTABD6CM1Abq9eX'
              }
              src="https://drive.google.com/uc?export=view&id=1eRhWn2wzH9gUGOvRTtTABD6CM1Abq9eX"
              width={160}
              height={160}
            /> */
}
