import {useOutletContext} from "react-router-dom";
import {PieChart, Pie, Legend, Tooltip} from "recharts";

const Stats = () => {
  const {timeline = []} = useOutletContext();


  const data =
    timeline.length === 0
      ? [{name: "No Data", value: 1, fill: "#e5e7eb"}]
      : [
          {
            name: "Call",
            value: timeline.filter((t) => t.type === "Call").length,
            fill: "#0F3D2E",
          },
          {
            name: "Text",
            value: timeline.filter((t) => t.type === "Text").length,
            fill: "#7C3AED",
          },
          {
            name: "Video",
            value: timeline.filter((t) => t.type === "Video").length,
            fill: "#22c55e",
          },
        ];


  return (
    <div className="bg-gray-50">
      <div className="max-w-277.5 py-8 md:py-20 mx-auto px-4 sm:px-6 lg:px-0">
        
        <h1 className="text-2xl md:text-5xl text-slate-800 font-bold mb-6">
          Friendship Analytics
        </h1>

        
        <div className="bg-white rounded-lg p-8 shadow">
          <p className="text-xl font-medium text-emerald-900">
            By Interaction Type
          </p>

          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "400px",
              aspectRatio: 1,
              margin: "auto",
            }}
            responsive
          >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="70%"
              paddingAngle={4}
              cornerRadius={5}
              fill="#0F3D2E"
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={10}
              formatter={(value) => (
                <span className="text-sm ml-1 text-slate-500">{value}</span>
              )}
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
