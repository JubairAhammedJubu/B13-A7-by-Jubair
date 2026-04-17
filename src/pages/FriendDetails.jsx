import {useParams, useLoaderData, useOutletContext} from "react-router-dom";
import toast from "react-hot-toast";

import Loader from "../components/Loader";

import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import {BsArchive} from "react-icons/bs";
import {RiDeleteBin6Line, RiNotificationSnoozeLine} from "react-icons/ri";

const FriendDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();

  const {setTimeline} = useOutletContext();

const friend = data.find(item => item.id == id);

  if (!friend) return <Loader />;

  const handleAction = (type) => {
    const entry = {
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      type,
      friendName: friend.name,
      friendId: friend.id,
    };

    
    if (setTimeline) {
      setTimeline((prev) => [...prev, entry]);
    }

    toast.success(`${type} with ${friend.name}`);
  };

  const {
    name,
    picture,
    email,
    bio,
    tags,
    status,
    days_since_contact,
    goal,
    next_due_date,
  } = friend;

  const statusColor =
    status === "overdue"
      ? "bg-red-500 text-white"
      : status === "almost due"
        ? "bg-amber-400 text-white"
        : "bg-emerald-800 text-white";

  const tagColor = "bg-emerald-100 text-emerald-800";

  return (
    <div className="bg-gray-50">
      <div className="max-w-277.5 mx-auto grid md:grid-cols-3 gap-6 py-7 lg:py-20 px-4 sm:px-6 lg:px-0 ">
        
        <div className="md:col-span-1 space-y-4">
         
          <div className="bg-white p-10 rounded-xl shadow">
            <img
              src={picture}
              alt={name}
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h2 className="text-xl font-bold text-center mt-3">{name}</h2>

            <div className="flex justify-center mt-2">
              <span className={`text-xs px-3 py-1 rounded-full ${statusColor}`}>
                {status}
              </span>
            </div>

            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              {tags?.map((t, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded-full ${tagColor}`}
                >
                  {t.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-center italic text-gray-500 mt-3">"{bio}"</p>

            <p className="text-center text-sm text-gray-400 mt-2">
              Preferred: email ({email})
            </p>
          </div>

          
          <div className=" space-y-3">
            <button
              onClick={() => toast.success("Snoozed 2 weeks")}
              className="w-full py-3 rounded-lg shadow bg-white hover:bg-gray-50 flex items-center justify-center gap-2 text-gray-800 font-medium"
            >
              <RiNotificationSnoozeLine />
              Snooze 2 Weeks
            </button>

            <button
              onClick={() => toast.success("Archived")}
              className="w-full py-3 rounded-lg shadow bg-white hover:bg-gray-50 flex items-center justify-center gap-2 text-gray-800 font-medium"
            >
              <BsArchive /> Archive
            </button>

            <button
              onClick={() => toast.error("Deleted")}
              className="w-full py-3 rounded-lg shadow bg-white text-red-500 hover:bg-red-50 flex items-center justify-center gap-2"
            >
              <RiDeleteBin6Line /> Delete
            </button>
          </div>
        </div>

        
        <div className="md:col-span-2 grid grid-rows-3 gap-4">
          
          <div className="rounded-xl grid grid-cols-3 gap-4 ">
            <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center text-center p-4">
              <p className="text-2xl md:text-3xl font-semibold">
                {days_since_contact}
              </p>
              <p className="text-xs md:text-lg text-slate-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center text-center p-4">
              <p className="text-2xl md:text-3xl font-semibold">{goal}</p>
              <p className="text-xs md:text-lg text-slate-500">Goal (Days)</p>
            </div>

            <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center text-center p-4">
              <p className="text-xl md:text-3xl font-semibold">
                {new Date(next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs md:text-lg text-slate-500">Next Due</p>
            </div>
          </div>

          
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                Relationship Goal
              </h3>
              <br />
              <p className="text-lg text-gray-500">
                Connect every{" "}
                <span className="text-black font-bold">{goal} days</span>
              </p>
            </div>

            <button className="px-4 py-1 text-sm font-medium border border-gray-200 bg-gray-100 rounded-sm hover:bg-gray-200">
              Edit
            </button>
          </div>

         
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg text-emerald-900 font-semibold mb-2">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleAction("Call")}
                className="p-4 shadow rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 flex flex-col items-center"
              >
                <img src={callIcon} alt="Call" className="w-6 h-6" />
                <span className="text-lg mt-2">Call</span>
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="p-4 shadow rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 flex flex-col items-center"
              >
                <img src={textIcon} alt="Text" className="w-6 h-6" />
                <span className="text-lg mt-2">Text</span>
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="p-4 shadow rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 flex flex-col items-center"
              >
                <img src={videoIcon} alt="Video" className="w-6 h-6" />
                <span className="text-lg mt-2">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

