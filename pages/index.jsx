import Image from 'next/image';
import ReactTyped from 'react-typed';
import ParticlesComponent from '../components/Particles';

export default function Home() {
  return (
    <>
      <div className="absolute right-0 left-0 min-h-screen w-full flex justify-center items-center flex-col">
        <Image
          className="h-8 w-auto"
          src="/procode-logo.svg"
          alt="Workflow"
          height={250}
          width={250}
        />
        <Image
          className="h-8 w-auto"
          src="/procode-text.svg"
          alt="Workflow"
          height={50}
          width={250}
        />
        <ReactTyped
          strings={[
            `"A platform for students, by students"`,
            'Official Tech club of the Department of IT',
          ]}
          typeSpeed={40}
          backSpeed={25}
          className="text-2xl sm:text-3xl font-mono font-bold mt-5 text-gray-500 dark:text-gray-300 text-center mx-10"
          loop
        />
      </div>
      <ParticlesComponent id="tsparticles" className="min-h-screen" />
    </>
  );
}
