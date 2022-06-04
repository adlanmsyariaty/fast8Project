function Sidebar({ sidebar, setFocus, focus }) {
  return (
    <div
      className={
        "w-[280px] h-[calc(100vh-82px)] bg-white absolute px-1 top-[82px] md:left-[-280px] " +
        (sidebar ? "md:left-[0px] md:w-[100%]" : "")
      }
    >
      <ul className="relative mt-2">
        <li className="relative">
          <div className="flex justify-left items-center ml-5">
            <div className="text-lg">
              <ion-icon name="home"></ion-icon>
            </div>
            <p
              className={
                "cursor-pointer flex items-center text-sm py-3 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out " +
                (focus === "home"
                  ? "font-bold text-[#33bdbf]"
                  : "text-gray-700")
              }
              onClick={() => setFocus("home")}
            >
              Home
            </p>
          </div>
        </li>
        <li className="relative">
          <div className="flex justify-left items-center ml-5">
            <div className="text-lg">
              <ion-icon name="people"></ion-icon>
            </div>
            <p
              className={
                "cursor-pointer flex items-center text-sm py-3 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out " +
                (focus === "personnel"
                  ? "font-bold text-[#33bdbf]"
                  : "text-gray-700")
              }
              onClick={() => setFocus("personnel")}
            >
              Personnel List
            </p>
          </div>
        </li>
        <li className="relative">
          <div className="flex justify-left items-center ml-5">
            <div className="text-lg">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <p
              className={
                "cursor-pointer flex items-center text-sm py-3 px-3 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out " +
                (focus === "daily"
                  ? "font-bold text-[#33bdbf]"
                  : "text-gray-700")
              }
              onClick={() => setFocus("daily")}
            >
              Daily Attendance
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
