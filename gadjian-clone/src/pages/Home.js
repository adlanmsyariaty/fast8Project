import React, { useEffect, useState, Suspense } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import AddSearchBar from "../components/AddSearchBar";
import { useSelector, useDispatch } from "react-redux";
import { changePage, loadUsers } from "../store/actions/userAction";
import Loading from "../components/Loading";
const CardList = React.lazy(() => import("../components/CardList"));

function Home() {
  const [focus, setFocus] = useState("personnel");
  const [sidebar, setSidebar] = useState(false);
  const { page } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers(page))
  }, [page, dispatch]);

  const pageIncrement = () => {
    if (page < 10) {
      let tempPage = page;
      dispatch(changePage(tempPage + 1));
    }
  };

  const pageDecrement = () => {
    if (page > 1) {
      let tempPage = page;
      dispatch(changePage(tempPage - 1));
    }
  };

  const showSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <NavBar showSideBar={showSideBar} />
      <Sidebar focus={focus} setFocus={setFocus} sidebar={sidebar} />

      <div
        className={
          "p-8 flex bg-[#e5e7eb] min-h-[calc(100%-98px)] flex-wrap left-[280px] top-[82px] absolute md:w-[100%] " +
          (sidebar ? "md:hidden" : "md:left-[0px] md:w-[calc(100%)]")
        }
      >
        <AddSearchBar />

        <div className="w-full mt-8 h-[calc(100%-90px)] flex justify-between pb-4 flex-wrap">
          <Suspense fallback={<Loading/>}>
            <CardList />
          </Suspense>
          <div className="w-[100%] mt-5 flex justify-center items-center">
            <div
              className={
                "flex justify-center items-center gap-1 mr-5 " +
                (page === 1 ? "text-gray-400 cursor-default" : "cursor-pointer")
              }
              onClick={() => pageDecrement()}
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
              <p>Previous Page</p>
            </div>
            <div
              className={
                "flex justify-center items-center gap-1 mr-5 " +
                (page === 10
                  ? "text-gray-400 cursor-default"
                  : "cursor-pointer")
              }
              onClick={() => pageIncrement()}
            >
              <p>Next Page</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
