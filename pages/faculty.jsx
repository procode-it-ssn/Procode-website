import { AcademicCapIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Faculty() {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <Navbar />
      <main className="flex bg-gray-100 justify-center items-center min-h-screen w-full dark:bg-gray-900 pt-[5rem] px-3 pb-4">
        <figure className="bg-white shadow-lg relative flex flex-col-reverse rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
          <blockquote className="flex flex-col gap-3 mt-6 text-slate-700 dark:text-slate-300 max-w-5xl">
            <p>
              Dr. T. Sree Sharmila obtained her Ph.D. degree from Anna
              University, Chennai under the Faculty of Information and
              Communication Engineering in July 2013. She completed her Master
              of Engineering in Computer Science and Engineering from Annamalai
              University, Chidambaram during June 2005 and her Bachelor of
              Engineering in Information Technology from Manonmaniam Sundaranar
              University, Tirunelveli during June 2003.
            </p>
            <p>
              {' '}
              She joined SSNCE in June 2005 as a lecturer in the department of
              Information Technology. Her current research areas of interest
              include computer vision, image processing and machine learning
              techniques. To her credit she has published more than 95 papers in
              international and national journals and conferences.
            </p>{' '}
            <p>
              She is a recognized Anna University research supervisor to guide
              Ph.D./M.S. candidates. Under her guidance, 8 Ph.D. scholars are
              doing their active research in the area of image and video
              processing. She has organized many externally/internally funded
              conferences/workshops and seminars at national and international
              level.
            </p>
            <p>
              She is a member of the professional societies, including ACM and
              IEEE. She is SSN-IEEE student branch counselor, Associate Program
              Officer of YRC events and one of the deputy wardens of ladies
              hostel, SSNCE.
            </p>
            <div className="p-4 flex justify-center items-center gap-5">
              <div className="flex text-lg font-semibold gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-linkedin h-6 w-6 text-gray-700 dark:text-slate-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <a
                  href="https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex text-lg font-semibold gap-1.5">
                <AcademicCapIcon className="h-7 w-7 text-gray-700 dark:text-slate-500" />
                <a
                  href="https://scholar.google.com/citations?user=SSGOx8kAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </blockquote>

          <figcaption className="flex items-center sm:space-x-4 text-center sm:text-left flex-col sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-circle h-24 w-24 text-gray-700 dark:text-slate-500"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <div className="flex flex-col leading-6 sm:mt-0 mt-3">
              <div className="text-lg text-slate-900 font-semibold dark:text-slate-300">
                Dr. T. Sree Sharmila
              </div>
              <div className="">Associate Professor</div>
              <div className="">M.E., Ph.D.</div>
              <div className="grid sm:grid-cols-2 sm:text-left text-center">
                <div className="flex gap-1 mr-2 ">
                  <MailIcon className="h-5 w-5 mt-[3px] text-gray-700 dark:text-slate-500" />
                  sreesharmilat@ssn.edu.in
                </div>
                <div className="flex gap-1 sm:justify-start justify-center">
                  <PhoneIcon className="h-4 w-4 mt-[4px] text-gray-700 dark:text-slate-500" />
                  Extn: 376
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </main>
    </>
  );
}
