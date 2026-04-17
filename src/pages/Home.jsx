import Banner from "../components/Banner";
import FriendCard from "../components/FriendCard";
import {use} from "react";

const Home = ({homeData}) => {
  const friends = use(homeData);

  return (
    <div className="bg-gray-50">
      <Banner friends={friends} />

      <div className="max-w-277.5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-0 pb-6 sm:pb-10 lg:20">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;
