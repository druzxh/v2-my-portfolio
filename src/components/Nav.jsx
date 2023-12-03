function Nav({ handleNav, isNavOpen }) {
  return (
    <div>
      <div className="absolute top-28 left-40 z-20">
        <img
          src="logo.png"
          alt="Logo"
          className="hover:cursor-pointer h-16 w-16"
        />
      </div>
      <div className="absolute top-28 right-40 z-20">
        <button
          className="focus:outline-none text-first-ground hover:text-amber-300 transition duration-300 ease-in-out"
          onClick={handleNav}
        >
          {isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-16 w-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <circle cx="24" cy="12" r="3" />
              <circle cx="36" cy="12" r="3" />
              <circle cx="36" cy="24" r="3" />
              <circle cx="36" cy="36" r="3" />
              <circle cx="24" cy="36" r="3" />
              <circle cx="12" cy="36" r="3" />
              <circle cx="12" cy="24" r="3" />
              <rect x="21" y="21" width="6" height="6" rx="3" ry="3" />
              <rect x="21" y="21" width="6" height="6" rx="3" ry="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default Nav;
