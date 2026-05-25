

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const SearchAndFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`);
  };

  const handleSpeciesChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    const selectedValue = e.target.value;

    if (selectedValue) {
      params.set("species", selectedValue);
    } else {
      params.delete("species");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch 
       gap-3 w-full lg:w-auto">

      <div className="flex flex-col gap-1 w-full md:w-auto">
        <label className="text-[#e2cfae]  text-start text-xs font-semibold  ">
          Search By Pet Name
        </label>
        <div className="relative flex flex-row items-center
         bg-white/5 border border-white/10 rounded-xl shadow-md focus-within:border-[#FFEFD5]/40 transition-all 
         overflow-hidden w-full p-1 backdrop-blur-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            type="text"
            placeholder="Search pets..."
            className="flex-1 h-9.5  px-3 outline-none bg-transparent
             text-white placeholder:text-white/40 text-xs md:text-sm min-w-30
             sm:min-w-55"
          />

          <button
            onClick={handleSearch}
            className="h-9 md:h-11 px-4 rounded-lg bg-[#FFEFD5] text-[#3D2516] font-bold text-xs 
            sm:text-sm hover:bg-[#FFEFD5]/90 active:scale-95 transition-all shadow-md shrink-0"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full md:w-52 flex flex-col gap-1">
        <label className="text-[#FFEFD5]/80 text-xs font-medium">Pet Type</label>

        <div className="relative">
          <select
            aria-label="Pet Type Select"
            value={searchParams.get("species") || ""}
            onChange={handleSpeciesChange}
            className="w-full bg-white/5 border border-white/10 
            rounded-xl px-3 h-11.5 md:h-13 text-white text-xs md:text-sm outline-none cursor-pointer
             focus:border-[#FFEFD5]/50 transition appearance-none pr-8"
            style={{ backgroundColor: "#3D2516" }}
          >
            <option value="" className="bg-[#1e1b18] text-[#ebd8c5]/50">All Species</option>
            <option value="cat" className="bg-[#1e1b18] text-[#ebd8c5]">Cat</option>
            <option value="dog" className="bg-[#1e1b18] text-[#ebd8c5]">Dog</option>
            <option value="bird" className="bg-[#1e1b18] text-[#ebd8c5]">Bird</option>
            <option value="rabbit" className="bg-[#1e1b18] text-[#ebd8c5]">Rabbit</option>
            <option value="other" className="bg-[#1e1b18] text-[#ebd8c5]">Other</option>
          </select>



          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
            <FiChevronDown className="w-4 h-4 text-[#FFEFD5] opacity-60 transition-opacity" />
          </div>
        </div>


      </div>

    </div>
  );
};

export default SearchAndFilter;












