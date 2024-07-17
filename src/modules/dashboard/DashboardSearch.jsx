const DashboardSearch = () => {
  return (
    <div className="bg-white w-full rounded-full shadow-[10px_10px_20px_rgba(218,213,213,0.15)] p-2">
      <div className="flex justify-between px-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full text-sm bg-transparent placeholder:text-text-4 text-text-1"
        />
        <button className="w-[72px] rounded-full bg-primary flex-shrink-0 text-teal-50 h-10 flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardSearch;
