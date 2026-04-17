import {useNavigate} from "react-router";

const FriendCard = ({friend}) => {
  const navigate = useNavigate();

  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-amber-400 text-white",
    "on-track": "bg-emerald-800 text-white",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="p-6 rounded-xl shadow-sm cursor-pointer bg-white text-center hover:shadow-md transition"
    >
    
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />

     
      <h2 className="mt-3 text-xl font-semibold text-gray-700">
        {friend.name}
      </h2>

      
      <p className="text-sm text-slate-500 mt-2">
        {friend.days_since_contact}d ago
      </p>

     
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800 font-semibold"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

     
      <div className="mt-2">
        <span
          className={`px-2 py-1 text-xs rounded-full font-semibold ${statusStyles[friend.status]}`}
        >
          {friend.status === "on-track"
            ? "On-Track"
            : friend.status === "almost due"
              ? "Almost Due"
              : "Overdue"}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
