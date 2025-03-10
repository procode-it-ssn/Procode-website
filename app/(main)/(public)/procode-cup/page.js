import ProblemCard from "@/components/ProblemStatement_card";
import TimelineCup from "@/components/Timeline_Cup";

export default function procode_cup() {
  let timeline_data = [
    {
      name: "Problem Statement Release",
      start_date: "March 10, 2025",
      description: "Get ready for a wonderful journey. Choose your problem statements!",
    },
    {
      name: "Registration & Idea Submissions",
      start_date: "March 14, 2025",
      description: "Form your teams and submit your initial project ideas.",
    },
    {
      name: "Shortlist Announcement",
      start_date: "March 15, 2025",
      description: "Announcement of teams advancing to the finals",
    },
    {
      name: "ProCoDe Cup Finals",
      start_date: "March 20, 2025",
      description: "The final showdown where top teams compete for the ProCoDe Cup",
    },
  ];

  const domains = [
    "Finance",
    "Healthcare and Well Being",
    "Social Good & Accessibility",
    "Education",
  ];

  const problem_statements = [
    {
      title: "Investment Advisor Dashboard",
      problem_statement: "Develop a React-based dashboard that allows users to explore technology trends, visualize GitHub activity, and receive AI-driven investment recommendations based on ML models analyzing repository activity.",
      domain: "Finance - ML, ReactJS"
    },
    {
      title: "Expense Splitter",
      problem_statement: "Develop an application that allows users to split expenses and track shared spending with friends, family, or groups. Users should be able to assign participants, track who owes whom, and settle debts easily.",
      domain: "Finance"
    },
    {
      title: "Expense Tracker",
      problem_statement: "Develop an expense tracking application where users can log daily expenses, categorize spending, and view insights such as monthly expenditure breakdowns and trends. Bonus: Implement a chatbot for querying spending patterns.",
      domain: "Finance"
    },
    {
      title: "Subscription Manager",
      problem_statement: "Develop an application that allows users to track their subscriptions across various services (e.g., Netflix, Spotify) and categorize them by type. The system should provide renewal reminders and spending insights.",
      domain: "Finance"
    },
    {
      title: "Workout Planner",
      problem_statement: "Develop a mobile or web application that allows users to create and manage their workout routines, log progress, and track performance over time.",
      domain: "Healthcare and Well Being"
    },
    {
      title: "Medication Reminder",
      problem_statement: "Develop an application that helps users track their medications and set reminders to take them on time, maintaining a history of doses taken or skipped.",
      domain: "Healthcare and Well Being"
    },
    {
      title: "Hospital Queue Management",
      problem_statement: "Develop a queue management system for hospitals or clinics, allowing patients to register, receive a queue number, and track their position in real time.",
      domain: "Healthcare and Well Being"
    },
    {
      title: "Rare Disease Support Network",
      problem_statement: "Develop a community-driven application where individuals with rare diseases can connect, share experiences, and support each other.",
      domain: "Healthcare and Well Being"
    },
    {
      title: "News Verification System",
      problem_statement: "Develop a news verification system that enables users to collaboratively validate the accuracy of news articles, displaying a credibility score and tracking verification history.",
      domain: "Social Good & Accessibility - ReactJS, Flutter, Git Version Control"
    },
    {
      title: "Disaster Relief Connector",
      problem_statement: "Develop an application that connects people offering and requesting help during disasters, providing a location-based filtering system for quick assistance.",
      domain: "Social Good & Accessibility"
    },
    {
      title: "Volunteer Matchmaking",
      problem_statement: "Develop an application that connects volunteers with community service activities like beach cleanups, tree plantations, and social outreach programs.",
      domain: "Social Good & Accessibility"
    },
    {
      title: "Lost and Found Portal",
      problem_statement: "Develop an application where users can report lost or found items, upload descriptions and images, and contact others for recovery.",
      domain: "Social Good & Accessibility"
    },
    {
      title: "AI Tutoring System",
      problem_statement: "Develop an AI-driven tutoring system that adapts to students' learning progress, providing personalized exercises and interactive problem-solving modules.",
      domain: "Education - AI, ReactJS, Flutter, Git Version Control"
    },
    {
      title: "Outpass Management System",
      problem_statement: "Develop an application that allows students to apply for an outpass electronically, enabling teachers to review and approve requests online, with a QR-based verification system.",
      domain: "Education"
    },
    {
      title: "College Chatbot",
      problem_statement: "Develop a chatbot that provides instant access to information about SSN College, including admissions, courses, events, and policies.",
      domain: "Education"
    }
  ];

  const project_guidelines = [
    {
      "title": "Project Requirements",
      "description": "All projects must include the following (including open innovation):",
      "rules": [
        {
          "bold": "Frontend",
          "text": "The project should use React.js or Flutter for the user interface."
        },
        {
          "bold": "Backend",
          "text": "The backend must be developed using Python."
        },
        {
          "bold": "APIs",
          "text": "The project should integrate and use APIs effectively."
        },
        {
          "bold": "Version Control",
          "text": "Git must be used properly to manage the project."
        },
        {
          "bold": "AI Component (Optional)",
          "text": "Teams may choose to include a chatbot or a prediction model, but it is not mandatory."
        }
      ]
    },
    {
      "title": "Git Guidelines",
      "description": "",
      "rules": [
        {
          "bold": "Frequent Commits",
          "text": "Teams should commit their progress regularly instead of uploading final files at the end."
        },
        {
          "bold": "Clear Commit Messages",
          "text": "Each commit should have a clear message describing the changes made."
        }
      ]
    },
    {
      "title": "Completion Criteria",
      "description": "",
      "rules": [
        {
          "bold": "Solve the Core Problem",
          "text": "The project need not include all suggested features mentioned in the problem statement but it must address the main problem effectively."
        },
        {
          "bold": "Functional Prototype",
          "text": "The final submission should be a demonstrable and working prototype of the solution."
        }
      ]
    },
    {
      "title": "General Rules",
      "description": "",
      "rules": [
        {
          "bold": "Plagiarism Prohibited",
          "text": "All submissions must be original. Any external resources used should be properly cited."
        },
        {
          "bold": "Professional Conduct",
          "text": "All participants must maintain professionalism and adhere to ethical coding practices."
        },
        {
          "bold": "Respect Deadlines",
          "text": "All projects must be submitted before the deadline. Late submissions will not be accepted."
        },
        {
          "bold": "Project Guidelines",
          "text": "More importance will be given to the technical demonstration and implementation quality rather than the novelty of the project idea."
        },
      ]
    }
  ]
  
  

  return (
    <main className="bg-gray-100 dark:bg-gray-900 pt-[4rem] max-w-7xl w-full mx-auto pb-16 flex flex-col items-center">
      <h1 className="mt-10 mb-5 text-4xl font-extrabold text-center text-gray-800 dark:text-gray-50">
        Welcome to ProCoDe Cup!
      </h1>
      <div className="w-full px-10">
        <div className="flex justify-center text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          Timeline
        </div>
        <TimelineCup events={timeline_data} />
      </div>

      <div className="w-11/12 bg-gray-700 h-1 rounded-lg mt-20 dark:bg-purple-200"></div>

      <div className="mt-10 w-full">
        <div className="flex mb-10 justify-center text-4xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Problem Statements
        </div>
        {
          domains.map((domain) => {
            return(
              <>
                <div className="flex text-center m-2 justify-center text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  <h1>
                    {domain}
                  </h1>
                </div>
                
                <div className="flex flex-wrap justify-center">
                  {problem_statements
                  .filter((problem) => problem.domain.startsWith(domain))
                  .map((problem) => (
                    <ProblemCard event={problem} key={problem.problem_statement} />
                  ))}
                </div>     
              </>
            );
          })
        }
      </div>

      <div className="w-11/12 bg-gray-700 h-1 rounded-lg mt-20 dark:bg-purple-200"></div>

      <div className="mt-10">
        <div
          className="flex flex-col items-center space-y-4 p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800
        shadow-yellow-200/50 duration-300
        "
        >
          <div className="text-xl font-bold">🏆 Prizes</div>

          <div className="w-full p-3 bg-yellow-300 text-black text-center font-semibold rounded-xl shadow-md">
            🥇 1st Place: <span className="font-bold">TBD</span>
          </div>

          <div className="w-full p-3 bg-gray-300 text-black text-center font-semibold rounded-xl shadow-md">
            🥈 2nd Place: <span className="font-bold">TBD</span>
          </div>

          <div className="w-full p-3 bg-orange-300 text-black text-center font-semibold rounded-xl shadow-md">
            🥉 3rd Place: <span className="font-bold">TBD</span>
          </div>
        </div>
      </div>

      <div className="w-11/12 bg-gray-700 h-1 rounded-lg mt-20 dark:bg-purple-200"></div>

      <div className="mt-5 flex justify-center text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
          Registration Details
      </div>

      <div className="mt-10 flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mx-10">
        <h2 className="text-xl font-bold mb-2 text-red-400">📜 Guidelines:</h2>
        {
          project_guidelines.map((guideline) => {
            return(
              <div className="my-5">
              <h1 className="text-3xl mb-3 dark:text-blue-300">
                {guideline.title}
              </h1>

              <h2 className="my-2">
                {guideline.description} 
              </h2>
              
              <ul className="list-disc list-inside space-y-1">
                {guideline.rules.map((rule) => <li><b className="sm:text-md">{rule.bold}: </b>{rule.text}</li>)}
              </ul>
              </div>
            )
          })
        }

        {/* <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-bold my-5 text-cyan-400 underline">
            ✍ Registration Link: Click me!
          </h2>
        </a> */}

        <h2 className="text-xl font-bold my-5 text-cyan-400 text-center">
          ✍ Registration Link: Coming Soon...
        </h2>

        <h2 className="text-xl font-bold my-5 text-red-500 dark:text-green-400">
          📍Venue: IT Seminar Hall
        </h2>
      </div>
    </main>
  );
}
