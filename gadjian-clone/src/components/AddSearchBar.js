import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function AddSearchBar() {
  return (
    <div className="bg-white w-full flex justify-between p-4 h-fit items-center flex-wrap">
      <div className="flex flex-wrap w-[350px] mb-2 md:w-full">
        <h1 className="text-3xl font-bold text-[#33bdbf]">PERSONNEL LIST</h1>
        <h1 className="text-2xl">List of all personnels</h1>
      </div>
      <div className="flex gap-x-5 items-center gap-2 flex-wrap justify-center">
        <div className="p-2 flex justify-between items-center w-[180px] md:w-full border-2">
          <label className="flex flex-wrap justify-center items-center gap-3">
            <div className="text-[#33bdbf] text-md w-[10%]">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </div>
            <input
              type="text"
              name="name"
              className="border-0 outline-none w-[80%]"
              placeholder="Find Personnels"
            />
          </label>
        </div>
        <div className="bg-[#33bdbf] p-3 flex justify-between text-white items-center w-[180px] md:w-full gap-3">
          <p className="text-white font-bold text-sm">ADD PERSONNEL</p>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default AddSearchBar;
