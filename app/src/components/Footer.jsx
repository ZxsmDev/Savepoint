import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSteam,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer({ links, icons }) {
  const footerLinks = {
    github: faGithub,
    steam: faSteam,
    linkedin: faLinkedin,
  };
  const footerIcons = {
    github: "https://github.com/ZxsmDev",
    steam: "https://steamcommunity.com/profiles/76561199213562635/",
    linkedin: "#",
  };

  return (
    <>
      <div className="bg-neutral-900 flex mt-auto shadow-2xl rounded-t-lg">
        <form className="flex gap-4 bg-[#2d2d2d] p-4 rounded-lg w-[35%] min-w-[350px] m-4">
          <div className="flex flex-col w-[40%]">
            <h3 className="text-white font-semibold mb-3 text-sm">
              Report an Issue
            </h3>
            <input
              className="bg-[#1f1f1f] text-white py-2 px-3 rounded-lg mb-2 text-sm border border-neutral-600 focus:outline-none focus:border-green-300"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#1f1f1f] text-white py-2 px-3 rounded-lg mb-3 text-sm border border-neutral-600 focus:outline-none focus:border-green-300"
              type="email"
              placeholder="example@gmail.com"
            />
            <button
              className="bg-amber-300 text-black py-2 px-3 rounded-lg flex justify-center items-center gap-2 hover:bg-amber-400 hover:cursor-pointer transition-all font-semibold text-sm"
              type="submit"
            >
              <FontAwesomeIcon icon={faBug} />
              Submit Report
            </button>
          </div>
          <textarea
            className="bg-[#1f1f1f] text-white py-2 px-3 rounded-lg text-sm border border-neutral-600 focus:outline-none focus:border-green-300 resize-none flex-1 mt-8"
            placeholder="Describe the issue..."
          />
        </form>

        <div className="flex-4 flex flex-col justify-center items-center text-center px-4">
          <p className="text-neutral-400 text-sm">
            Copyright ©2025{" "}
            <span className="text-white font-semibold">ZxsmDev</span>
          </p>
          <p className="text-neutral-500 text-xs mt-1">All rights reserved</p>
        </div>

        <section className="flex flex-col justify-center items-end pr-12">
          <h3 className="text-white font-semibold mb-3 text-lg text-right">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-3 w-full">
            {Object.keys(links).map((key, index) => (
              <li
                key={index}
                className="text-zinc-400 hover:text-green-300 transition-all cursor-pointer text-right"
              >
                <Link to={links[key]} className="no-underline">
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex items-center border-l-2 border-neutral-700 px-4">
          <ul className="flex flex-col h-full justify-center gap-4">
            {Object.keys(footerLinks).map((key, index) => (
              <li key={index} className="flex">
                <a
                  href={footerIcons[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-4xl hover:text-green-300 transition-all"
                >
                  <FontAwesomeIcon icon={footerLinks[key]} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
