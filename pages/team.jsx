import { UserCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Confetti from '../components/confetti';
import Modal from '../components/Modal';
import teamData from '../teamInfo/teamData.json';

export default function Team() {
  const [isOpen, setIsOpen] = useState(false);
  const [memberData, setMemberData] = useState({});

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pb-16 pt-[4rem] lg:px-[10rem] sm:px-[5rem] md:px-[7rem] px-[3rem]">
      <Confetti activate={true} />
      <h1 className="mt-10 mb-5 text-4xl font-extrabold text-center text-gray-800 dark:text-gray-50">
        Meet our amazing team!
      </h1>
      <div className="grid gap-10 min-h-screen">
        {teamData.map((section, i) => {
          return (
            <div key={i}>
              <h2 className="text-3xl font-bold my-7 text-center">
                {section.title}
              </h2>
              <div className="flex flex-wrap gap-5 mx-auto w-fit justify-center items-center">
                {section.members.map((member, indx) => {
                  return (
                    <div
                      key={indx}
                      className="flex flex-col justify-between bg-white dark:shadow-2xl dark:bg-slate-800 rounded-lg shadow-md pt-8 min-w-[17.5rem]"
                    >
                      <div className="px-6">
                        {member.avatar ? (
                          <img
                            className="mx-auto w-40 h-40  rounded-full object-cover drop-shadow-lg"
                            alt={member.name}
                            src={`https://drive.google.com/uc?export=view&id=${member.avatar}`}
                          />
                        ) : (
                          <UserCircleIcon className="h-40 w-40 mx-auto text-gray-200 dark:text-gray-600" />
                        )}

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
                          <button
                            onClick={(_) => {
                              setIsOpen(true);
                              setMemberData(member);
                            }}
                            className="block w-full px-3 py-2 text-center text-sm font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-500"
                          >
                            About
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Modal
          isopen={isOpen}
          data={memberData}
          socials={memberData.socials}
          closeFunc={() => setIsOpen(false)}
        />
      </div>
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
