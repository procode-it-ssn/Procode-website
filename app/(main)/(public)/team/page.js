// import teamData from '../teamInfo/teamData.json';

import Member from "@/components/Member";
import { TeamMembers } from "@/data";

export default function Team() {
  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-900 pt-[4rem] max-w-7xl w-full mx-auto pb-16">
        {/* <Confetti activate={true} /> */}
        <h1 className="mt-10 mb-5 text-4xl font-extrabold text-center text-gray-800 dark:text-gray-50">
          Meet our amazing team!
        </h1>
        <div className="flex flex-col gap-8 min-h-screen mx-auto">
          {TeamMembers.map((section, i) => {
            return (
              <div key={i} className="text-center">
                <h2 className="text-3xl font-bold my-7">
                  {section.title}
                </h2>
                <div className="flex flex-wrap gap-5 justify-center items-center">
                  {section.members.map((member, index) => (
                    <Member key={index} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
