"use client";

import { SearchIcon } from "@/components/svgs";
import React, { useState, useEffect, ChangeEvent } from "react";
import Container from "../Container";
import buyCarServices from "@/services/buycarService";
import { useRouter } from "next/navigation";

const SearchPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const router = useRouter();

  // Debouncing Effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query); // Update the debounced query after the delay
    }, 400); // 300ms delay before the query is debounced

    return () => {
      clearTimeout(handler); // Clear timeout if query changes before the delay
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      fetchSuggestions(debouncedQuery);
    }
  }, [debouncedQuery]);

  const fetchSuggestions = async (query: string) => {
    const searchSuggestions = await Promise.all([
      buyCarServices.getBrands({ name: query }),
      buyCarServices.getBuyCars({ name: query }),
    ]);

    let brandSuggestions = searchSuggestions[0].data
      .slice(0, 4)
      .map((sug: any) => sug.name);

    let carModelSuggestions = searchSuggestions[1].data.data
      .slice(0, 4)
      .map((sug: any) => sug.name);

    setSuggestions([...brandSuggestions, ...carModelSuggestions]);
  };

  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    setSuggestions([]);
    setQuery("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state on input change
  };

  // const onSubmitSearch = (e) => {
  //   e.preventDefault()
  //   router.push(`/buycarslist?name=${}`)
  // }

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSuggestions([]);
      closePopup(); // Close popup on suggestion click
      router.push(`/buycarslist?name=${e.currentTarget.value}`);
    }
  };

  return (
    <div>
      <div onClick={openPopup}>
        <SearchIcon height={36} width={36} />
      </div>
      {isOpen && (
        <Container>
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50 pt-20">
            <div className="relative bg-white p-8 rounded-lg w-3/4 mx-4">
              <button
                onClick={closePopup}
                className="absolute top-0 right-2 text-black text-4xl"
              >
                &times;
              </button>
              <input
                type="text"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg"
                placeholder="Search Your Car"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleInputSubmit}
              />

              {suggestions.length > 0 && (
                <div className="mt-2 border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSuggestions([]);
                        closePopup(); // Close popup on suggestion click
                        router.push(`/buycarslist?name=${suggestion}`);
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default SearchPopup;
