import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function ListItem(icon, text, path, isActive) {
  return (
    <Link to={path} className="no-underline">
      <li
        className={`flex items-center gap-2 rounded-l-lg p-2 my-3 border-r-3 font-semibold border-amber-white transition-all text-lg hover:shadow-md hover:cursor-pointer hover:bg-amber-300 hover:text-black hover:border-[#212121] ${
          isActive
            ? "bg-neutral-900  border-[#212121] rounded-lg"
            : "text-white"
        }`}
      >
        <FontAwesomeIcon icon={icon} />
        <h2>{text}</h2>
      </li>
    </Link>
  );
}

export default function Navbar({ links, icons }) {
  const location = useLocation();

  return (
    <>
      <nav className="w-[20%] min-h-screen flex flex-col bg-[#212121] px-2 py-4 shadow-2xl border-r border-neutral-700">
        <section className="flex items-center justify-start">
          <img
            className="w-25"
            src="assets/Savepoint_Logo.png"
            alt="Savepoint Logo"
          />

          <Link
            to="/"
            className="text-green-400 font-bold text-3xl hover:cursor-pointer no-underline"
          >
            SAVEPOINT
          </Link>
        </section>

        <section className="grow">
          <ul className="px-8 mt-6">
            {Object.keys(links).map((key, index) => {
              const path = links[key];
              const isActive = location.pathname === path;
              return ListItem(icons[key], key, path, isActive);
            })}
          </ul>
        </section>

        <section className="px-8 pb-4">
          <li className="flex items-center gap-2 rounded-lg shadow-md p-2 font-semibold transition-all bg-[#111111] text-lg hover:cursor-pointer hover:bg-amber-300 hover:text-black list-none">
            <FontAwesomeIcon icon={faUser} />
            <h2>Account</h2>
            <div className="flex justify-end grow">
              <FontAwesomeIcon icon={faCaretUp} />
            </div>
          </li>
        </section>
      </nav>
    </>
  );
}
