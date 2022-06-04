import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar({ showSideBar }) {
  return (
    <div className="bg-white p-1 flex justify-between items-center absolute left-0 top-0 w-full">
      <div className="m-3 flex justify-center items-center gap-4">
        <div className="text-3xl nmd:hidden" onClick={() => showSideBar()}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </div>
        <img
          src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e196fd5534bec8a1696b426156b889d3.png"
          className="h-[50px]"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center gap-5 mr-5">
        <h1 className="text-2xl md:hidden">
          Hallo,{" "}
          <span className="text-[#33bdbf] font-medium">Gadjian User</span>
        </h1>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="h-[50px] rounded-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
