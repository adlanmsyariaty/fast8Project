import Card from "./Card";
import { useSelector } from "react-redux";
import Loading from "./Loading";

function CardList({isLoading}) {
  const { users } = useSelector((state) => state.user);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="flex flex-wrap justify-between items-center w-full h-[100%] gap-y-5 md:justify-around">
      {users.length > 0 &&
        users.map((user, index) => <Card key={index} user={user} />)}
    </div>
  );
}

export default CardList;
