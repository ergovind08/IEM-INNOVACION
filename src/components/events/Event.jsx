// import React from "react";
import Footer from "../footer/Footer";
// import EventsDetails from "./EventsDetails";
import { Cards } from "./Cards";
import img2 from "./cardimage/robopace.jpg";
import img4 from "./cardimage/innovare.jpg";
import img8 from "./cardimage/mathmagic.jpg";
import img9 from "./cardimage/iiiso.jpg";
import img15 from "./cardimage/hackai.jpg";
import img16 from "./cardimage/admania.jpg";
import img19 from "./cardimage/bgmi.jpg";
import img21 from "./cardimage/fifa.jpg";
import img18 from "./cardimage/bullmaster.jpg";


const content = [
  {
    id: 1,
    url: "",
    texthead: "Tracker",
    textContent:
      "Robots designed with the line following ability compete with others for a  chance at the top prize. The discipline of your automatons are set to be tested  when they enter the tracker arena",
  },
  {
    id: 2,
    url: img2,
    texthead: "Robopace",
    textContent:
      "With the X-Race setting the stage and Robofooties delivering the grand finale, the Ultimate Fusion event promises an unforgettable experience for spectators of all ages. Whether you're a robotics enthusiast, a sports fanatic, or simply looking for an exhilarating day out, this one-of-a-kind event has something for ever.",
  },
  {
    id: 3,
    url: "",
    texthead: "Hell in a cell",
    textContent:
      "Rampant and unfazed destruction ensues in the gauntlet  of Hell in a Cell. Technologically modified and weaponized  robots compete for ultimate supremacy by decimating  their opponents and claiming the prize.",
  },
  {
    id: 4,
    url: img4,
    texthead: "Innovare & Science Model Exhibition",
    textContent:
      "This exhibition provides a platform to put forth your out-of-the-  box ideas and gives a chance to demonstrate its prototype in  front of leading state industrialists who may just fund your  brilliant concepts. It provides you with an exposure towards  latest technologies and helps the engineering fraternity in the  better evolution of ideas.",
  },
  {
    id: 5,
    url: "",
    texthead: "Electroslides",
    textContent:
      "This event accepts participants from different institutions  and industries across the globe in the field of Electrical  Engineering and it's periphery. A team consisting of a  maximum up to 4 members will present their research  paper , in front of eminent experts in relevant fields.",
  },
  {
    id: 6,
    url: "",
    texthead: "Aperture",
    textContent:
      "If your camera lens has a story to share, this is the  best place for it to air. It is always a feast for every  anxious photographer to capture those short-lived  moments and take a share out of the ever-flowing  river of time.",
  },
  {
    id: 7,
    url: "",
    texthead: "Quize Crusate",
    textContent:
      "Participate in the biggest quiz competition where  you will face teams with equal calibre and  knowledge trying to out score you at every  question.",
  },
  {
    id: 8,
    url: img8,
    texthead: "Mathemagic",
    textContent:
      "This event is for those crazy about mathematics  and the patterns hidden in the cold, yet beautiful  landscape of mathematics. Participate in groups  of minimum 2 and maximum 3 people and stand  a chance to win exciting prizes.",
  },
  {
    id: 9,
    url: img9,
    texthead: "IIISO",
    textContent:
      "This event is focused on analytical, logical and critical thinking  skills in various fields of science, including Physics, Chemistry and  Biology. Compete only with the best and prove your mettle.",
  },
  {
    id: 10,
    url: "",
    texthead: "PixelPioneer- UI/UX DESIGN HACKATHON",
    textContent:
      "Put your UI/UX design expertise to the test in a series of innovative challenges. From creating intuitive user interfaces to designing seamless user experiences, tackle real-world problems and showcase your creativity in a competitive environment.",
  },
  {
    id: 11,
    url: "",
    texthead: "CYBERTHON-CAPTURE THE FLAG",
    textContent:
      "CyberThon, the Ethical Hacking Hackathon. Participate and  compete in security-themed challenges to get the highest  score possible and stand a chance to win exciting and cool  prizes",
  },
  {
    id: 12,
    url: "",
    texthead: "360CodeCraft",
    textContent:
      "practice of working on all aspects of a software and web application, from the user interface (UI) and user experience (UX) on the front end to server-side scripting, databases, and infrastructure on the back end. It requires a broad skill set and the ability to handle various technologies and programming languages.",
  },
  {
    id: 13,
    url: "",
    texthead: "CodeBreak Odyssey - Offline Coding Hunt",
    textContent:
      "This challenges students, promoting problem-solving skills and a deeper understanding of code structure, fostering cognitive flexibility and intuition. ",
  },
  {
    id: 14,
    url: "",
    texthead: "CodeSphere- ONLINE CODING HACKATHON",
    textContent:
      "Prepare to tackle a series of dynamic coding challenges designed to push your limits and expand your skill set. From algorithmic puzzles to real-world problem-solving, each challenge will test your ingenuity and coding prowess.",
  },
  {
    id: 15,
    url: img15,
    texthead: "HACK-AI",
    textContent:
      "This will be a 48-Hour Virtual Hackathon, Technology: You will build applications with generative AI ✔️ Level: All levels are welcome  For whom?: Builders, creators & innovators!",
  },
  {
    id: 16,
    url: img16,
    texthead: "AD-Mania",
    textContent:
      "“Ad-Mad” aims to provide an opportunity to bring out individual and collective talent of the participant. By providing a platform to participants of maximum 4 members in a team to explore and present their creativity and to make participants aware about the essential concept of advertising and their execution.",
  },
  {
    id: 17,
    url: "",
    texthead: "Eureka",
    textContent:
      "The IEM Entrepreneurship Cell,has the vision to  encourage students of the institute to consider self-  employment as a viable career option and to guide and  inspire them in the field of Innovations, Inventions and  entrepreneurship.",
  },
  {
    id: 18,
    url: img18,
    texthead: "The Bull Master",
    textContent:
      "Learn how the stock market works, understand the basics  of the stock market through experiential learning of  economic and financial concepts and stand a chance to  win exciting prizes, only at The Bull Master",
  },
  {
    id: 19,
    url: img19,
    texthead: "BGMI",
    textContent:
      "If your iconic characters in Battle Royale have left others  reeling, then we have the perfect competition in mind.  Innovación 2024 promises to be your Gunsmith and enhance  the weapons of your gaming skills. Bring in the unimaginably  superior grenade of your skills to win as you battle against the  best.",
  },
  {
    id: 20,
    url: "",
    texthead: "VALIANTS",
    textContent:
      "Bring your love for gaming and Valorant to the arena. Let the bomb  of your love for gaming explode at Innovación 2024. May the  weapons of your skills define you as an unforgettable OP!",
  },
  {
    id: 21,
    url: img21,
    texthead: "FIFA",
    textContent:
      "Entice your fifa skills and Player of the moth cards. If you llive,  breathe and sleep football, then we have the perfect  competition for you. Challenge contenders on all sorts of  platforms.",
  },
];

const Event = () => {
  return (
    <div className="w-screen relative">
    <div className=" text-white mt-[100px] sm:mt-[150px] left-[10px] sm:left-10 overflow-auto relative flex items-center justify-center w-screen sm:w-[1455px] parent mb-0">
      <div className="flex flex-col sm:flex-row flex-wrap overflow-auto mx-auto pt-9 w-[90%] sm:w-[100%] mb-0 ">
        {content.map((item) => (
          <div className="  w-full sm:w-1/3 px-2 sm:px-8 sm:px-8 rounded-2xl" key={item.id}>
            <Cards content={item} />
          </div>
        ))}
      </div>
    </div>
      </div>

      <Footer />

  );
};

export default Event;
