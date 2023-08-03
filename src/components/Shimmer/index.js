import { v4 as uuidV4 } from "uuid";

const Shimmer = () => {
  return (
    <div className="flex flex-col xs:flex-row xs:space-x-6 w-full flex-wrap p-0 items-center sm:flex-row mt-4 space-x-0 space-y-3  sm:space-x-4 md:space-x-10  md:space-y-3">
      <div></div>
      {Array(6)
        .fill("")
        .map((each) => (
          <div
            key={uuidV4()}
            className="h-[420px] w-full xs:min-w-[240px] xs:max-w-[250px] md:min-w-[260px] md:max-w-[300px] border p-2 mt-4 rounded-md"
          >
            <div className="bg-gray-400 h-[140px] w-full shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-8 bg-gray-400 shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-20 bg-gray-400 shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-10 bg-gray-400 shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-10 flex items-center justify-around">
              <div className="bg-gray-400 h-10 w-2/5 shadow-gray-600 shadow-md rounded-md"></div>
              <div className="bg-gray-400 h-10 w-2/5 shadow-gray-600 shadow-md rounded-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
