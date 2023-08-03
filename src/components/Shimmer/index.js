import { v4 as uuidV4 } from "uuid";

const Shimmer = () => {
  return (
    <div className="flex flex-col xs:flex-row space-x-5 w-full flex-wrap">
      <div></div>
      {Array(4)
        .fill("")
        .map((each) => (
          <div key={uuidV4()} className="h-96 w-[240px] border p-2 mt-4">
            <div className="bg-gray-400 h-[120px] w-full shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-6 bg-gray-400 shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-16 bg-gray-400 shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-10 bg-gray-400 shadow-gray-600 shadow-md"></div>
            <hr className="w-full my-2" />

            <div className="w-full h-10 flex items-center justify-around">
              <div className="bg-gray-400 h-10 w-2/5 shadow-gray-600 shadow-md"></div>
              <div className="bg-gray-400 h-10 w-2/5 shadow-gray-600 shadow-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
