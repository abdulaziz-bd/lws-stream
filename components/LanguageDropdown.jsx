"use client";
import Image from "next/image";
import { useState } from "react";

export default function LanguageDropdown({ initialLang }) {
  const [selectedLang, setSelectedLang] = useState(initialLang);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLang) => {
    document.cookie = `locale=${newLang}; path=/`;
    setSelectedLang(newLang);
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        className="flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={selectedLang === "en" ? "/usa.png" : "/bd.png"}
          alt={selectedLang === "en" ? "English" : "Bangla"}
          width="24"
          height="24"
          className="rounded-full"
        />
        <span className="text-sm font-medium">
          {selectedLang === "en" ? "English" : "Bangla"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-50 text-black">
          <li
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100 ${
              selectedLang === "bn" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleLanguageChange("bn")}
          >
            <Image
              src="/bd.png"
              alt="Bangla"
              width="20"
              height="20"
              className="rounded-full"
            />
            Bangla
          </li>
          <li
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100 ${
              selectedLang === "en" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            <Image
              src="/usa.png"
              alt="English"
              width="20"
              height="20"
              className="rounded-full"
            />
            English
          </li>
        </ul>
      )}
    </div>
  );
}
