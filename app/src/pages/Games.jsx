import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";


export default function Games({ links, icons }) {
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = [
    { id: "check1", label: "Filter Check 1" },
    { id: "check2", label: "Filter Check 2" },
    { id: "check3", label: "Filter Check 3" },
    { id: "check4", label: "Filter Check 4" },
    { id: "check5", label: "Filter Check 5" },
  ];
  const categoryOptions = [
    { id: "radio1", label: "Filter Radio 1" },
    { id: "radio2", label: "Filter Radio 2" },
    { id: "radio3", label: "Filter Radio 3" },
  ];

  return (
    <>
      <div className="flex">
        <Navbar links={links} icons={icons} />
        <div className="flex flex-col w-full">
          <Search onToggleFilters={() => setShowFilters(!showFilters)} />
          <div className="flex flex-1">
            <Body />
            {showFilters && (
              <aside className="bg-[#2d2d2d] border-l border-neutral-700 w-64 px-4 py-4 overflow-y-auto">
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Filters
                </h3>
                <form className="mb-6">
                  <h4 className="text-white font-semibold text-sm mb-3">
                    Options
                  </h4>
                  <ul className="space-y-2">
                    {filterOptions.map((option) => (
                      <li key={option.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={option.id}
                          className="cursor-pointer"
                        />
                        <label
                          htmlFor={option.id}
                          className="text-neutral-300 cursor-pointer text-sm"
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </form>
                <form>
                  <h4 className="text-white font-semibold text-sm mb-3">
                    Category
                  </h4>
                  <ul className="space-y-2">
                    {categoryOptions.map((option) => (
                      <li key={option.id} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          id={option.id}
                          className="cursor-pointer"
                        />
                        <label
                          htmlFor={option.id}
                          className="text-neutral-300 cursor-pointer text-sm"
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </form>
              </aside>
            )}
          </div>
          <Footer links={links} icons={icons} />
        </div>
      </div>
    </>
  );
}
