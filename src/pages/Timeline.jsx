import {useOutletContext} from "react-router-dom";
import {useState} from "react";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const iconMap = {
  Call: <img src={callIcon} alt="call" />,
  Text: <img src={textIcon} alt="text" />,
  Video: <img src={videoIcon} alt="video" />,
};

const bgMap = {
  Call: "bg-blue-50 border-blue-200",
  Text: "bg-green-50 border-green-200",
  Video: "bg-purple-50 border-purple-200",
};

const Timeline = () => {
  const {timeline = []} = useOutletContext();

  
  const [filter, setFilter] = useState("All");

  
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-277.5 mx-auto py-10">
      <div className="bg-gray-50 p-5 rounded-xl shadow">
        <h3 className="text-3xl md:text-5xl font-bold mb-6">Timeline</h3>

        
        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-80 px-5 py-3 border-2 border-gray-200 rounded-lg text-gray-500 "
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        
        <div className="space-y-3">
          {filteredTimeline.length === 0 ? (
            <p className="text-lg text-gray-400 p-10 text-center">
              No activity yet
            </p>
          ) : (
            filteredTimeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  bgMap[item.type] || "bg-gray-50"
                }`}
              >
                
                <div className="p-2 bg-white rounded-full shadow">
                  {iconMap[item.type]}
                </div>

                
                <div>
                  <p className="text-base md:text-lg font-semibold text-emerald-900">
                    {item.type}{" "}
                    <span className="text-gray-500 font-normal">
                      with {item.friendName}
                    </span>
                  </p>
                  <p className="font-medium text-gray-500">{item.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
