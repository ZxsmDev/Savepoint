import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Search({ onToggleFilters }) {
  return (
    <>
      <div className="bg-neutral-900 flex shadow-2xl justify-center items-center rounded-b-lg py-4 gap-4 h-[10%]">
        <button className="ml-4 transition-all cursor-pointer hover:text-green-300">
          <FontAwesomeIcon className="text-2xl" icon={faChevronLeft} />
        </button>

        <form className="flex items-center justify-center gap-2 bg-[#1f1f1f] py-2 px-4 border border-neutral-600 rounded-full w-[30%] min-w-[350px] transition-all duration-500">
          <input
            className="bg-transparent ml-2 text-xl focus:outline-none border-none w-full"
            type="search"
            placeholder="Search..."
            onFocus={() => {
              const form = document.querySelector("form")
              form.classList.remove("w-[30%]")
              form.classList.add("w-[95%]")
            }}
            onBlur={() => {
              const form = document.querySelector("form")
              form.classList.remove("w-[95%]")
              form.classList.add("w-[30%]")
            }}
          />
          <button type="submit">
            <FontAwesomeIcon className="text-xl" icon={faSearch} />
          </button>
        </form>

        <button
          className="flex grow pe-4 transition-all cursor-pointer hover:text-green-300"
          onClick={onToggleFilters}
        >
          <FontAwesomeIcon className="ml-auto text-2xl" icon={faFilter} />
        </button>
      </div>
    </>
  );
}
