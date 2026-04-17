import {Plus} from "lucide-react";

const Banner = ({friends}) => {
  
  const totalFriends = friends.length;
  
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  
  const needAttention = friends.filter((f) => f.status === "overdue").length;
  
  const interactions = friends.filter((f) => f.days_since_contact <= 30).length;

  return (
    <div className="bg-gray-50">
      
      <div className="mx-auto px-4 sm:px-6 lg:px-0 ">
        <div className="max-w-277.5 mx-auto pt-12 sm:pt-16 lg:pt-20">
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Friends to keep close in your life
            </h1>

            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>

            <div className="my-8 sm:my-10">
              <button className="inline-flex items-center gap-2 bg-emerald-900 text-white px-4 py-3 rounded-md hover:bg-emerald-600 transition">
                <Plus size={18} />
                Add a Friend
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center">
              <p className="text-emerald-900 text-3xl sm:text-4xl font-bold">
                {totalFriends}
              </p>
              <p className="text-slate-500 text-base sm:text-lg mt-2">
                Total Friends
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center">
              <p className="text-emerald-900 text-3xl sm:text-4xl font-bold">
                {onTrack}
              </p>
              <p className="text-slate-500 text-base sm:text-lg mt-2">
                On Track
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center">
              <p className="text-emerald-900 text-3xl sm:text-4xl font-bold">
                {needAttention}
              </p>
              <p className="text-slate-500 text-base sm:text-lg mt-2">
                Need Attention
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center">
              <p className="text-emerald-900 text-3xl sm:text-4xl font-bold">
                {interactions}
              </p>
              <p className="text-slate-500 text-base sm:text-lg mt-2">
                Interactions This Month
              </p>
            </div>
          </div>

          
          <div className="my-8 sm:my-10">
            <hr className="border-gray-200 border" />
          </div>

          <p className="text-2xl font-semibold text-slate-800 mb-4">Your Friends</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
