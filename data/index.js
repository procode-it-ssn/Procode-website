// ProCoDe committee, 2026-27.
// Source of truth for /team — see app/(main)/(public)/team/page.js.
// socials values are usernames, not URLs; components/Member.js builds the links.
// A member needs both an `image` and a `socials` object or Member.js throws.

// Member Images
import Akshayalakshmi_S from "@/assets/tms/Akshayalakshmi_S.jpg";
import Irfan_Akthar_A from "@/assets/tms/Irfan_Akthar_A.jpg";
import Bagavati_Narayanan from "@/assets/tms/Bagavati_Narayanan.jpg";
import Jayanth_Natarajan from "@/assets/tms/Jayanth_Natarajan.jpg";
// import Srivathsan_G from "@/assets/tms/Srivathsan_G.jpg"; // TODO: photo missing
import Shrinarayan_N from "@/assets/tms/Shrinarayan_N.jpg";
import Sanjay_J from "@/assets/tms/Sanjay_J.jpg";
import Pranav_Krishna_P from "@/assets/tms/Pranav_Krishna_P.jpg";
import Kavinkishore_I from "@/assets/tms/Kavinkishore_I.jpg";
import Kathirvelan_J from "@/assets/tms/Kathirvelan_J.jpg";
import Daniel_Wilson from "@/assets/tms/Daniel_Wilson.jpg";
import Rijja_H from "@/assets/tms/Rijja_H.jpg";
import Meghana_Kumar from "@/assets/tms/Meghana_Kumar.jpg";
import Akkshaya_Kumar_R_V from "@/assets/tms/Akkshaya_Kumar_R_V.jpg";
// import Guru_Abijeth_S from "@/assets/tms/Guru_Abijeth_S.jpg"; // TODO: photo missing
import Hitesh_M_R from "@/assets/tms/Hitesh_M_R.jpg";
import Oviya_T_S from "@/assets/tms/Oviya_T_S.jpg";
// import Sreenath_G from "@/assets/tms/Sreenath_G.jpg"; // TODO: photo missing
import Sundararajan_R from "@/assets/tms/Sundararajan_R.jpg";
import Yasasvini_Tiwari from "@/assets/tms/Yasasvini_Tiwari.jpg";
import Divasundar_S from "@/assets/tms/Divasundar_S.jpg";
import Vidya_Varuni_R from "@/assets/tms/Vidya_Varuni_R.jpg";
import Yashwanth_A from "@/assets/tms/Yashwanth_A.jpg";
import Yashwanth_B from "@/assets/tms/Yashwanth_B.jpg";
import Harshini_A from "@/assets/tms/Harshini_A.jpg";

export const TeamMembers = [
  {
    title: "Office Bearers",
    members: [
      {
        name: "Akshayalakshmi S",
        role: "President",
        bio: "\"It feels unreal (not the game engine) to be ProCoDe's President, and it is with immense happiness, gratitude and pride that I take on this role,\" says Akshayalakshmi, President of ProCoDe. As former DSA Sub-head who spammed the Whatsapp group midnight, having whole conversations about time complexities at complex timings like 2:00 a.m., she is the first person on your speed dial for multi-domain support, spanning across tech, PR and life crises (credits to former admin for this line of the caption). Working like a phone at 100% charge and hopping around the place with high energy, she yaps like there is no tomorrow, and breaking technical concepts down to lore-drop bootcamps. For further contact with the President, book an appointment with the President's office seven days in advance. Requests will be received QUICkly and reviewed on FIFO basis. (I am laughing at my talent for satire and puns in the last two sentences) Jokes apart, she is really really excited to be here, and looks forward to all the amazing things that the year has in store for the team!",
        year: "IV",
        image: Akshayalakshmi_S,
        socials: {
          github: null,
          linkedin: "akshayalakshmi-s-43396a2b7",
          instagram: "the_azure_mirage",
        },
      },
      {
        name: "Irfan Akthar A",
        role: "Vice President",
        bio: "If I had a nickel for every time I wrote a caption for a reveal (myself), I'd have zero nickels.",
        year: "IV",
        image: Irfan_Akthar_A,
        socials: {
          github: null,
          linkedin: null,
          instagram: null,
        },
      },
      {
        name: "Bagavati Narayanan",
        role: "Secretary",
        bio: "Dearest Gentle Readers, With a heart most devoted to the thrilling pages of murder mysteries, and a spirit ever inclined toward the grace of dance and music, I find myself endlessly enchanted by both art and intrigue. Yet beyond the ballroom and the turning pages of suspenseful tales, I possess a profound admiration for all things technological — ever eager to explore, create, and bring curious ideas to life with passion and purpose.",
        year: "IV",
        image: Bagavati_Narayanan,
        socials: {
          github: "baggie11",
          linkedin: "bagavati-narayanan-98484b292",
          instagram: "bag11_01",
        },
      },
    ],
  },
  {
    title: "Team Heads and Sub Heads",
    members: [
      {
        name: "Jayanth Natarajan",
        role: "AI/ML Head",
        bio: "Making AI cooler than your ex’s excuses 🤡",
        year: "IV",
        image: Jayanth_Natarajan,
        socials: {
          github: null,
          linkedin: null,
          instagram: null,
        },
      },
      // TODO: photo not yet identified — add assets/tms/Srivathsan_G.jpg,
      // restore the import above, then uncomment.
      // {
      // name: "Srivathsan G",
      // role: "AI/ML Sub Head",
      // bio: "If it works, all part of the plan. If it doesn’t, we figure it out 🙄. Taking over as your AI/ML SubHead.",
      // year: "III",
      // image: Srivathsan_G,
      // socials: {
      // github: null,
      // linkedin: "indubitablysrivathsan",
      // instagram: "indubitablysrivathsan",
      // },
      // },
      {
        name: "Shrinarayan N",
        role: "DSA Head",
        bio: "I like filter coffee",
        year: "IV",
        image: Shrinarayan_N,
        socials: {
          github: null,
          linkedin: "shrinarayan-n",
          instagram: "shrinarayan_05",
        },
      },
      {
        name: "Sanjay J",
        role: "DSA Sub Head",
        bio: "Runs on random thoughts and sudden motivation Trying to survive college while pretending to have life figured out Mostly chill… until exams appear",
        year: "III",
        image: Sanjay_J,
        socials: {
          github: null,
          linkedin: "sanjayssn28",
          instagram: "_sanjayjp_",
        },
      },
      {
        name: "Pranav Krishna P",
        role: "Web Dev Head",
        bio: "Strongly believes in automating for 3 hours instead of manually doing it 5 minutes every day.",
        year: "IV",
        image: Pranav_Krishna_P,
        socials: {
          github: null,
          linkedin: "pranav-krishna-p",
          instagram: "theproudlinuxer",
        },
      },
      {
        name: "Kavin Kishore I",
        role: "Web Dev Sub Head",
        bio: "I've got plenty of hobbies, but web development is definitely the one paying the bills the best so far! 🤑😂 From backend logic to frontend magic, I just love exploring both sides of the screen to ship projects. Super excited to be the Web Development Sub Head at ProCoDe for 2026-27. Let's skip the tutorials this year, get our hands dirty, and build (and break) epic things together. Cheersss! 💻🔥",
        year: "III",
        image: Kavinkishore_I,
        socials: {
          github: null,
          linkedin: "kavin-kishore-i",
          instagram: "kavinkishore12",
        },
      },
      {
        name: "Kathirvelan J",
        role: "App Dev Head",
        bio: "Back in my day, we drank coffee to stay awake. Now I drink coffee to monitor AI agents and see how many reels I can watch between prompts.",
        year: "IV",
        image: Kathirvelan_J,
        socials: {
          github: null,
          linkedin: "kathirvelanj",
          instagram: "kathirvelan213",
        },
      },
      {
        name: "Daniel Wilson",
        role: "App Dev Sub Head",
        bio: "built different (still figuring out how)",
        year: "III",
        image: Daniel_Wilson,
        socials: {
          github: null,
          linkedin: "daniel-wilson-1a9b54329",
          instagram: "itsdanielwilson",
        },
      },
    ],
  },
  {
    title: "Senior Core Committee",
    members: [
      {
        name: "Rijja H",
        role: "Senior Core Committee Member",
        bio: "Built on caffeine, code & confidence",
        year: "IV",
        image: Rijja_H,
        socials: {
          github: null,
          linkedin: "rijja-h",
          instagram: "_rijja_hakkim_",
        },
      },
      {
        name: "Meghana Kumar",
        role: "Senior Core Committee Member",
        bio: "I’m usually the person trying to keep everything together while also somehow being part of the chaos. I like planning things, taking initiative, and making sure people around me feel comfortable and included. I’m usually balancing responsibilities, ideas, and mild chaos while living off my playlists and occasionally disappearing into my own world for a bit.",
        year: "IV",
        image: Meghana_Kumar,
        socials: {
          github: null,
          linkedin: "meghanakumar45",
          instagram: "meghi_0405",
        },
      },
    ],
  },
  {
    title: "Core Committee",
    members: [
      {
        name: "Akkshaya Kumar R V",
        role: "Technical Core Committee Member",
        bio: "Debugging code? Solved it. Last-minute event chaos? Handling it. Random deep conversations at 2 AM? Always available. As a core member of proCode, he enjoys working with people, sharing ideas, and bringing positive energy into everything he does. From coding discussions to club events, he’s someone who helps keep things smooth, collaborative, and fun.",
        year: "III",
        image: Akkshaya_Kumar_R_V,
        socials: {
          github: null,
          linkedin: "rv-akkshaya-kumar",
          instagram: "akkshay_3",
        },
      },
      // TODO: photo not yet identified — add assets/tms/Guru_Abijeth_S.jpg,
      // restore the import above, then uncomment.
      // {
      // name: "Guru Abijeth S",
      // role: "Technical Core Committee Member",
      // bio: "Low battery. High standards. 😮‍💨",
      // year: "III",
      // image: Guru_Abijeth_S,
      // socials: {
      // github: null,
      // linkedin: "guru-abijeth-s-46610132b",
      // instagram: "_guruabijeth_sivakumar_",
      // },
      // },
      {
        name: "Hitesh M R",
        role: "Technical Core Committee Member",
        bio: "People think I’m calm and mature until they see me laughing alone at my own thoughts like a Marvel side character who somehow survives every chaos with optimism, bad jokes, and unreal confidence in the comeback arc.",
        year: "III",
        image: Hitesh_M_R,
        socials: {
          github: null,
          linkedin: "hitesh-m-r-51bb7832a",
          instagram: "hitesh_mr_27",
        },
      },
      {
        name: "Oviya T S",
        role: "Technical Core Committee Member",
        bio: "Turning caffeine into workshops, questionable humour, and hopefully a few \"wait, I actually get this now\" moments ☕️✨️",
        year: "III",
        image: Oviya_T_S,
        socials: {
          github: null,
          linkedin: "oviya-t-s-147b52329",
          instagram: "_oviyasen_",
        },
      },
      // TODO: photo not yet identified — add assets/tms/Sreenath_G.jpg,
      // restore the import above, then uncomment.
      // {
      // name: "Sreenath G",
      // role: "Technical Core Committee Member",
      // bio: "Nothing works, when everything works...",
      // year: "III",
      // image: Sreenath_G,
      // socials: {
      // github: null,
      // linkedin: "sreenath-g-81414a326",
      // instagram: "vaillant_sree",
      // },
      // },
      {
        name: "Sundararajan R",
        role: "Technical Core Committee Member",
        bio: "ASPIRING FOOD CONSUMER",
        year: "III",
        image: Sundararajan_R,
        socials: {
          github: null,
          linkedin: "sundararajan-r-899553389",
          instagram: "sundararajan06",
        },
      },
      {
        name: "Yasasvini Tiwari",
        role: "Technical Core Committee Member",
        bio: "I'm someone who loves series(four time big bang theory watcher over here) and solving extremely hard sudokus in my free time! I enjoy interesting tech news (except for the ones with layoffs), learning new things and meeting new people. The most interesting part about me though, is that I have a dog :)",
        year: "III",
        image: Yasasvini_Tiwari,
        socials: {
          github: null,
          linkedin: "yasasvini-tiwari-719988288",
          instagram: "yasasvini_tiwari",
        },
      },
      {
        name: "Divasundar S",
        role: "Technical Core Committee Member",
        bio: "Hey, I’m Divasundar — IT’s biggest \"DIVA\" 😅 and somehow capable of surviving an entire night without caffeine, sleep, or stable emotions, powered purely by ambition and determination. My laptop works as hard as I do, and I’m always ready to explore what’s possible next. In ProCode, I’m here not just to learn, but also to teach, help people grow, and survive the tech chaos together.",
        year: "II",
        image: Divasundar_S,
        socials: {
          github: null,
          linkedin: "divasundar-s",
          instagram: "_.divasundar",
        },
      },
      {
        name: "Vidya Varuni R",
        role: "Technical Core Committee Member",
        bio: "Hi, I’m Vidya Professionally surviving on last minute motivation, random bursts of productivity, and figuring things out midway while enjoying brainstorming, creative chaos, and random long rants. I’m also the kind of person who’ll go crazy over an error in line 132 (the program itself ends at line 130😭), but somehow find it addictive enough to stay fixated on solving it At ProCode, I’m here to learn, contribute, and grow through experiences that are meaningful beyond just the work itself.",
        year: "II",
        image: Vidya_Varuni_R,
        socials: {
          github: null,
          linkedin: "vidya-varuni-r-377881407",
          instagram: "vidya_varuni_r",
        },
      },
      {
        name: "Yashwanth A",
        role: "Technical Core Committee Member",
        bio: "Still searching for Ctrl + Z in real life 🫠",
        year: "II",
        image: Yashwanth_A,
        socials: {
          github: null,
          linkedin: "yashwanth-a-ssn",
          instagram: "yashwanth_keys",
        },
      },
    ],
  },
  {
    title: "Design, Marketing and Social Media Heads",
    members: [
      {
        name: "Yashwanth B",
        role: "Design and Marketing Head",
        bio: "Hello there goisss, Yashwanth here, just another student figuring things out one deadline at a time. somewhere between classes, meetings, and group chats, this club became a really fun part of college life. Thankful for the people, the experiences, and all the random moments that make the stress worth it.",
        year: "III",
        image: Yashwanth_B,
        socials: {
          github: null,
          linkedin: "yashwanth-b-2a3824329",
          instagram: "neuclyst",
        },
      },
      {
        name: "Harshini A",
        role: "Design and Marketing Sub Head",
        bio: "Hii, Harshini here — you’ve probably seen me speed-walking around campus with my headphones on, chasing whatever project I’ve made my personality for the week. From photography and art to debates, MUNs, music, and (obviously) design — I collect hobbies like other people collect Pokémon cards. What can I say… creative chaos ftw ;)",
        year: "II",
        image: Harshini_A,
        socials: {
          github: null,
          linkedin: "harshini-arun-3479bb37a",
          instagram: null,
        },
      },
    ],
  },
];
