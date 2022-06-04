import { useEffect, useState } from "react";

function Card({ user }) {
  const [birth, setBirth] = useState("");

  useEffect(() => {
    setBirth(
      `${user.dob.date.slice(0, 10).split("-")[2]}-${
        user.dob.date.slice(0, 10).split("-")[1]
      }`
    );
  }, [user.dob.date]);

  return (
    <div className="h-[400px] bg-white w-[270px] rounded-2xl md:w-full md:h-fit">
      <div className="flex px-5 py-2 border-b-2 justify-between h-[9%] items-center">
        <h1>
          Personnel ID:{" "}
          <span className="text-[#33bdbf] font-medium">123456</span>
        </h1>
        <div className="flex justify-center items-center text-2xl">
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
      </div>

      <div className="md:flex md:justify-around md:items-center md:w-[100%]">
        <div className="flex justify-center items-center p-2 h-[150px] md:w-[220px] md:p-4">
          <img
            src={user.picture.medium}
            className="h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="text-left px-5 h-[50%] flex flex-wrap flex-col justify-around">
          <div className="flex flex-wrap h-[20%] w-full">
            <h1 className="font-bold w-[100%]">Name</h1>
            <h1 className="w-[100%]">
              {user.name.first} {user.name.last}{" "}
            </h1>
          </div>
          <div className="flex flex-wrap h-[20%] w-full">
            <h1 className="font-bold w-[100%]">Telephone</h1>
            <h1>{user.phone} </h1>
          </div>
          <div className="flex flex-wrap h-[20%] w-full md:hidden">
            <h1 className="font-bold w-[100%]">Birthday</h1>
            <h1>{birth}</h1>
          </div>
          <div className="flex flex-wrap h-[20%] w-full md:hidden">
            <h1 className="font-bold w-[100%]">Email</h1>
            <h1>{user.email} </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
