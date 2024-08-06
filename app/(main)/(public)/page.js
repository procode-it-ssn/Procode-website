import Image from 'next/image';
import ParticlesComponent from '@/components/Particles';

export default function Home() {
  return (
    <>
      <ParticlesComponent
        id="tsparticles"
        className="min-h-screen absolute top-0 right-0 "
      />
      <div className="relative min-h-screen w-full flex justify-center items-center flex-col">
        <div className="relative bottom-4 mx-10">
          <Image src="/procode-text.svg" width={500} height={100} />
        </div>

        <h1 className="text-xl font-bold text-gray-700 dark:text-gray-200 z-50 text-center mx-10">
          A platform for students, by students
        </h1>

        <div className="absolute bottom-32 mx-10 z-50">
          <Image
            src="/down-arrow.png"
            width={50}
            height={50}
            className="down-arrow z-50"
          />
        </div>
      </div>
      <div className="max-w-7xl 2xl:mx-auto mx-5 md:mx-10 mt-16">
        <h1 className="text-4xl font-montserrat font-[900] grad-text-blue">
          Guiding Talents,
          <br /> Culminating Visions
        </h1>
        <div className="grid md:grid-cols-3 md:gap-20">
          <div className="flex justify-center items-center flex-col md:my-16 my-10 mx-5 md:mx-0">
            <Image src="/lecture.png" alt="meetups" height={100} width={100} />
            <h2 className="font-montserrat text-2xl font-extrabold mt-5 mb-4 text-gray-800 dark:text-gray-100">
              Meetups
            </h2>
            <p className="text-lg font-poppins text-gray-700 dark:text-gray-200 text-center font-medium">
              Get to attend club activities regularly in the form of
              workshops/seminars
            </p>
          </div>

          <div className="flex justify-center items-center flex-col md:my-16 my-10 mx-5 md:mx-0">
            <Image
              src="/consultation.png"
              alt="meetups"
              height={100}
              width={100}
            />
            <h2 className="font-montserrat text-2xl font-extrabold mt-5 mb-4 text-gray-800 dark:text-gray-100">
              Mentorship
            </h2>
            <p className="text-lg font-poppins text-gray-700 dark:text-gray-200 text-center font-medium">
              Feel Free to approach any committee member for mentorship/Guidance
            </p>
          </div>

          <div className="flex justify-center items-center flex-col md:my-16 my-10 mx-5 md:mx-0">
            <Image src="/team.png" alt="meetups" height={100} width={100} />
            <h2 className="font-montserrat text-2xl font-extrabold mt-5 mb-4 text-gray-800 dark:text-gray-100">
              Feel Home
            </h2>
            <p className="text-lg font-poppins text-gray-700 dark:text-gray-200 text-center font-medium">
              Remember, we are one family. Widen your skills and learn anything
              that interests you!
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl 2xl:mx-auto mx-5 md:mx-10 pt-5 pb-20">
        <h1 className="text-4xl font-montserrat font-[900] grad-text-blue">
          Not just one,
          <br /> We deal with so many topics!
        </h1>
        <div className="grid md:grid-cols-2 gap-10 mt-16 drop-shadow-lg">
          <div className="px-10 py-5 flex items-center  gap-5 shadow-lg rounded-xl dark:bg-slate-800">
            <Image
              src="/datastructures.png"
              alt="datastructures"
              height={50}
              width={50}
            />
            <h3 className="text-lg font-poppins font-bold text-gray-700 dark:text-gray-200">
              Data Structures & Algorithms
            </h3>
          </div>

          <div className="px-10 py-5 flex items-center  gap-5 shadow-lg rounded-xl dark:bg-slate-800">
            <Image src="/webdev.png" alt="webdev" height={50} width={50} />
            <h3 className="text-lg font-poppins font-bold text-gray-700 dark:text-gray-200">
              Web Development
            </h3>
          </div>

          <div className="px-10 py-5 flex items-center  gap-5 shadow-lg rounded-xl dark:bg-slate-800">
            <Image src="/appdev.png" alt="appdev" height={50} width={50} />
            <h3 className="text-lg font-poppins font-bold text-gray-700 dark:text-gray-200">
              App Development
            </h3>
          </div>

          <div className="px-10 py-5 flex items-center  gap-5 shadow-lg rounded-xl dark:bg-slate-800">
            <Image
              src="/machine-learning.png"
              alt="appdev"
              height={50}
              width={50}
            />
            <h3 className="text-lg font-poppins font-bold text-gray-700 dark:text-gray-200">
              Machine Learning
            </h3>
          </div>

          <div className="px-10 py-5 flex items-center  gap-5 shadow-lg rounded-xl dark:bg-slate-800">
            <Image src="/training.png" alt="training" height={50} width={50} />
            <h3 className="text-lg font-poppins font-bold text-gray-700 dark:text-gray-200">
              Placement Training
            </h3>
          </div>

          <div className="px-10 py-5 flex items-center  gap-5 shadow-lg rounded-xl dark:bg-slate-800">
            <Image src="/more.png" alt="more" height={50} width={50} />
            <h3 className="text-lg font-poppins font-bold text-gray-700 dark:text-gray-200">
              And many more ...
            </h3>
          </div>
        </div>

        <div className="flex justify-center"></div>
      </div>
    </>
  );
}
