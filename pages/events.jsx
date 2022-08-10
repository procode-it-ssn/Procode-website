import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Events() {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <Navbar />
      <main className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 pb-16 pt-[4rem] lg:px-[10rem] sm:px-[5rem] md:px-[7rem] px-[3rem]">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
          No upcoming events... Stay tuned!
        </h2>
      </main>
    </>
  );
}
