import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { useDebounce } from "./hooks/useDebounce";
import "semantic-ui-css/semantic.min.css";

const categoryValues = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const sortValues = ["relevance", "newest"];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [getSearchValue, setGetSearchValue] = useState("All");
  const [categoriesValue, setCategoriesValue] = useState("All");
  const [sortValue, setSortValue] = useState("Relevance");

  const debounced = useDebounce(searchValue);

  const handleCatagorieValue = (event: any) => {
    if (event.target.value === "all") {
      setCategoriesValue("All");
      setGetSearchValue("All");
    } else {
      setCategoriesValue(event.target.value);
    }
  };

  const handleSearchValue = (event: any) => {
    event.preventDefault();
    if (debounced === "") {
      setGetSearchValue("All");
    } else {
      setGetSearchValue(debounced);
      setSearchValue("");
    }
  };

  const handleKeyDown = (event: any) => {
    setSearchValue(event.target.value);
    if (event.key === "Enter") {
      setGetSearchValue(debounced);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="flex flex-col items-center">
          <div className="w-full p-5 text-center ">
            <h1 className="text-3xl text-white font-bold ">Search For Book</h1>
          </div>
          <form
            className="w-full mb-5 text-center sm:mb-0 ssm:mb-0"
            onSubmit={handleSearchValue}
          >
            <div className="flex justify-center">
              <input
                className="w-[50%] rounded-l-lg p-2"
                type="text"
                placeholder="Search for books..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
              ></input>
              <button
                type="submit"
                className="p-2 shadow-md bg-white rounded-r-lg hover:bg-gray-300 transition"
              >
                <FaSistrix />
              </button>
            </div>
          </form>
          <div className="w-full flex justify-center flex-wrap p-5">
            <div className="mr-5 text-xl flex flex-wrap sm:mb-3 sm:mr-0 ssm:justify-center">
              <p className="pr-2 text-white drop-shadow-lg ssm:mb-1">
                Categories
              </p>
              <select
                className="w-48 border border-grey drop-shadow rounded focus:outline-none capitalize"
                value={categoriesValue}
                onChange={handleCatagorieValue}
              >
                {categoryValues.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </select>
            </div>
            <div className="mr-5 text-xl flex flex-wrap sm:mb-3 sm:mr-0 ssm:justify-center">
              <p className="pr-2 text-white drop-shadow-lg ssm:mb-1">
                Sorting by
              </p>
              <select
                className="w-48 border border-grey drop-shadow rounded focus:outline-none capitalize"
                value={sortValue}
                onChange={(e) => setSortValue(e.target.value)}
              >
                {sortValues.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <Outlet context={{ getSearchValue, categoriesValue, sortValue }} />
    </>
  );
}

export default App;
